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
  

# I2C warmup:

1. What are the disadvantages of the other two serial communication channels, UART and SPI, and how does I2C improve on them?


2. I2C is a two-wire serial communication channel. What are the two wires, SDA and SCL?

    SCL is the clock signal from the master device for I2C communication coordination. SDA is the address and data sent to or recieved         from the slave device.
  
3. What distinguishes the master and the slaves?

    The master device can call the slave devices using their addresses and its clock. With these two lines the master can write data to or     read data from the slave devices but, the slave can not do the same to the master. they must recieve or give data to the master             only when the master calls them.
    
 4. How are the two types of protocol frames different?
 
 5. What is the most appropriate trigger for capturing an I2C frame on the oscilloscope?
 
    It is best to trigger on the address frame. 
    
 # First steps with I2C
 
 ## In a loop configure the microbit to write to an arbitrary I2C address.
 
 1. What frame did you capture? 
 
    The frame captured was the address frame. The data frame is missing. Since there is no acknowledge the microbit does not send data.     To prove there I wrote the same data to two adresses. In the pucture you can see the differences. I wrote to address 0x33               data 2056. [picture](https://drive.google.com/open?id=1MO4j2DVavOOopLI2WoWB74jDm51NRnnz) and address 0x1F data 2056 [picture]           (https://drive.google.com/open?id=1MX87x9fjfo8W_xH09E54W0coafCq9GV1)
    
 2. What does the write function do if there is nothing connected? It sends out the address and waits for an acknowledge. With nothing       attached it gets no acknowledge and does not send data.
 
 3. Is there a difference in what you capture if you write to an internal address? Yes, the microbit gets an acknowledge when it writes     to an internal address and then sends data. You can clearly see the address and data frames in the pictures. To prove this I first       did a write to address 0x19 with data 1 [picture](https://drive.google.com/open?id=1N7hwyeswLbazN_a0vw7XtoMJg4U0DY1G) and then to       address 0x19 data 2056 [picture](https://drive.google.com/open?id=1Miwu5Cjre_zt5eFwpb7wNkC4e4HAYzo3). You can see a difference in       the data frame between the two pictures.
    
 ## Write a short program to read a number from the I2C devices on the microbit.
 
 1. Try all three addresses (Bonus for a cogent argument about why there are three).
    There are three addresses because there are three different variations of the micribit that have three different on board device variations that have three different addresses. 
