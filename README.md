This assignment [README](README.md) is _intentionally_ blank. It is part of the assignment to fill it. Read the [requirements](requirements.md) and [criteria](criteria.md).

# Oscilloscope warmup

## Visualize simple continuous signals

1. Configure the OUT of the built-in function generator on the workstation
  [Video](https://drive.google.com/open?id=1KaVA-8ODM3Nq4mszeLmeU4ybDzrl-X06)
  
2. Fire up the standalone Rigol function generator.
  [Video](https://drive.google.com/open?id=1KbOLyCi8Whs5TwbCIVZ05xRh6Tswb3WI)
  
3. Write a one-line micro:bit program to set an analog pin to emit PWM pulses
  [Video](https://drive.google.com/open?id=1L1lBcZV-wYVSt4BwrvFeOQ2wgPvMRI_d)
  
4. Write a loop that varies the duty cycle, up and down, between 5% and 95%, in steps of 5%
  [Video](https://drive.google.com/open?id=1K3JJoz3r66mBR8rAS8xY1Wm9DV71DDp8)
  
    file: [PWM.js](https://github.com/Introduction-to-Computer-Engineering/final-project-assignment-8-week-13-vincefeil/blob/master/PWM.js)
  
  

# I2C warmup:

1. What are the disadvantages of the other two serial communication channels, UART and SPI, and how does I2C improve on them?

   UART devices are asynchronous and require that the two devices on the bus have the same clock rate. There is hardware overhead and      the complexity is more difficult to manage in software. You must also have a start and stop bit on each package meaning 10 bits for      each transmision. They are also most suited to busses with only two devices.
   
   SPI devices require four pins for the first device on the bus and then a chip select pin for each additional device. many devices        mean many pins. SPI allaws only one master on the bus but, any number of slaves.
   
   I2C devices can have more than one master and upto 1008 slaves. They only require two wires to connect masters and slaves and have      data rates between UART and SPI. Software is easy to impliment.


2. I2C is a two-wire serial communication channel. What are the two wires, SDA and SCL?

    SCL is the clock signal from the master device for I2C communication coordination. SDA is the address and data sent to or recieved       from the slave device.
  
3. What distinguishes the master and the slaves?

    The master device can call the slave devices using their addresses and its clock. With these two lines the master can write data to     or  read data from the slave devices but, the slave can not do the same to the master. they must recieve or give data to the master     only when the master calls them.
    
 4. How are the two types of protocol frames different?
 
    The address frame has a start condition that must be generated befor the rest of the information is transmited. The data frame has a     stop condition that signals the end of the transmition. Also the address frame and data frames are what they say. One is addressing     a slave device and data is the infomation passed between them.
 
 5. What is the most appropriate trigger for capturing an I2C frame on the oscilloscope?
 
    It is best to trigger on the address frame. 
    
 # First steps with I2C
 
 ## In a loop configure the microbit to write to an arbitrary I2C address.
 
 1. What frame did you capture? 
 
    I used this command to perform the next three tasks. [pins.i2cWrite](https://makecode.microbit.org/reference/pins/i2c-write-number)
 
    The frame captured was the address frame. The data frame is missing. Since there is no acknowledge the microbit does not send data.     To prove there I wrote the same data to two adresses. In the pucture you can see the differences. I wrote to address 0x33               data 2056. [picture](https://drive.google.com/open?id=1MO4j2DVavOOopLI2WoWB74jDm51NRnnz) and address 0x1F data 2056 
    [picture](https://drive.google.com/open?id=1MX87x9fjfo8W_xH09E54W0coafCq9GV1)
    
    image 0x33/2056:
    
    ![alt text](https://github.com/Introduction-to-Computer-Engineering/final-project-assignment-8-week-13-vincefeil/blob/master/i2cWrite0x332056.jpg)
    
    image 0x1F/2056:
    
    ![alt text](https://github.com/Introduction-to-Computer-Engineering/final-project-assignment-8-week-13-vincefeil/blob/master/i2cWrite0x1F2056.jpg)
    
    
    
 2. What does the write function do if there is nothing connected? It sends out the address and waits for an acknowledge. With nothing       attached it gets no acknowledge and does not send data.
 
 3. Is there a difference in what you capture if you write to an internal address? Yes, the microbit gets an acknowledge when it writes     to an internal address and then sends data. You can clearly see the address and data frames in the pictures. To prove this I first       did a write to address 0x19 with data 1 [picture](https://drive.google.com/open?id=1N7hwyeswLbazN_a0vw7XtoMJg4U0DY1G) and then to       address 0x19 data 2056 [picture](https://drive.google.com/open?id=1Miwu5Cjre_zt5eFwpb7wNkC4e4HAYzo3). You can see a difference in       the data frame between the two pictures. In this video i was able to capture the address and data changing while writing two             different ones in the same program. [video](https://drive.google.com/open?id=1P7KaY7ZxxqpQao7aZr4rb67UnLp4D58z)
 
    file: [i2cWrite.js](https://github.com/Introduction-to-Computer-Engineering/final-project-assignment-8-week-13-vincefeil/blob/master/i2cWrite.js)
 
    image 0x19/1:
    
    ![alt text](https://github.com/Introduction-to-Computer-Engineering/final-project-assignment-8-week-13-vincefeil/blob/master/i2cWrite0x191.jpg)
    
    image 0x19/2056:
    
    ![alt text](https://github.com/Introduction-to-Computer-Engineering/final-project-assignment-8-week-13-vincefeil/blob/master/i2cWrite0x192056.jpg)
    
 ## Write a short program to read a number from the I2C devices on the microbit.
 
 1. Try all three addresses (Bonus for a cogent argument about why there are three).
 
    for the accelerometer the first address (0x19) is the slaves address. The next is the read address (0x33) and the last is the write     address (0x32). The last two tell the slave which operation to perform Read or Write. 
    
    First address 0x0E [picture](https://drive.google.com/open?id=1OolMzt1V4nY5k_4U_ISafdRlsphSBaD5) shows the display of 0 and the         address frame with no data following it.
    
    image read 0x0E:
    
    ![alt text](https://github.com/Introduction-to-Computer-Engineering/final-project-assignment-8-week-13-vincefeil/blob/master/i2cRead0x0E.jpg)
    
    Second address 0x1D [picture](https://drive.google.com/open?id=1OREOn6xoAd49MGPnvXb3J7_Of0VDhs6H) similarly there is an address         frame with no data. Close inspection shows a slight difference in the address frame from the frame of 0x0E.
    
    image read 0x1D
    ![alt text](https://github.com/Introduction-to-Computer-Engineering/final-project-assignment-8-week-13-vincefeil/blob/master/i2cRead0x1D.jpg)
    
    Third address 0x1E magnetometer. First video shows the microbit pointing South West 
    [video](https://drive.google.com/open?id=1OEdO2dAZcdWf63bwZICcT_USobOLy1Ax). Second video shows microbit pointing North West 
    [video](https://drive.google.com/open?id=1OFdYA520tmhLvIPZZNfp18_QBmCQAG1W). You can see two sets of clock cycles and this shows         where the address and data frames are seperated. you can also see a difference in the microbit displays and the data frames from         when the microbit is pointed South West and when it is pointed North West.
    
 2. Try signed and unsigned single bite integers.
 
    First I did a read at address 0x19 with signed integers 
    [picture](https://drive.google.com/open?id=1OOxYeCEbrIfCNzfROyCzDXBW15-LJPtx) then with an unsigned interger. The reading on the         microbit changed from -128 to 128 but, I was unable to detect the difference in the data frame.
    
3. Scrole the values on the LED matrix.

4. What values did you read?

   With signed integers I got -128 and with unsigned I got 128. This is the data that is being read from the sensor.
   
5. Can you get different values by moving the microbit arround?

   Yes this was demonstrated above when the readings came from the magnetometer.
