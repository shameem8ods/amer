import React from 'react'
import { useEffect } from 'react'
import { Flex, Img, Box, Textarea, Button, Input } from '@chakra-ui/react'
import ReactStars from "react-rating-stars-component";


function CardRight1() {

  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  return (
    <Flex direction={'column'} w={'100%'} pt='50px' justifyContent={'center'} alignItems={['center', 'flex-start']}>
      <Flex position={'relative'} w='100%' p={['20px']}>
        <Input type={'text'} backgroundColor='#ffffff78' w={'100%'} />
        <Box position={'absolute'} backgroundColor='white' rounded={'full'} p='2px 10px' bottom={'49px'} left={['29px']} fontSize={['11px', '15px']} className='animate fadeInUp one'>Your Name </Box>
      </Flex>
      <Flex position={'relative'} w='100%' p={['20px']} >
        <Input type={'text'} backgroundColor='#ffffff78' w={'100%'} />
        <Box position={'absolute'} backgroundColor='white' rounded={'full'} p='2px 10px' bottom={'49px'} left={['29px']} fontSize={['11px', '15px']} className='animate fadeInUp one'>Your Mobile Number</Box>
      </Flex>

      <Flex fontSize={['18px', '38px']} fontWeight='600' mb='10px' justifyContent={'left'} padding={['0px 30px;']} textAlign='left' >
        How do you rate overall performance of the Counter Staff?
      </Flex>
      <Flex justifyContent={'left'} alignItems='center' w={'100%'} p='0px 30px'>
        <Box background='#ffffff78'
          borderRadius='20px'
          padding='0px 10px' className='animate fadeInUp one zoom'>
          <ReactStars
            count={5}
            onChange={ratingChanged}
            size={24}
            activeColor="#00c31a"
          />
        </Box>
      </Flex>

      <Flex fontSize={['18px', '38px']} fontWeight='600' m='20px 0px 10px' justifyContent={'left'} padding={['0px 30px;']} textAlign='left' >
      How likely are you to visit the center again?
      </Flex>
      <Flex justifyContent={'left'} alignItems='center' w={'100%'} p='0px 30px'>
        <Box background='#ffffff78'
          borderRadius='20px'
          padding='0px 10px' className='animate fadeInUp one zoom'>
          <ReactStars
            count={5}
            onChange={ratingChanged}
            size={24}
            activeColor="#00c31a"
          />
        </Box>
      </Flex>

      <Flex fontSize={['18px', '38px']} fontWeight='600' m='20px 0px 10px' justifyContent={'left'} padding={['0px 30px;']} textAlign='left' w={'100%'} >
        How was the overall service Provided?
      </Flex>
      <Flex justifyContent={'left'} alignItems='center' w={'100%'} ml={['60px','30px']}>
        <Box background={'#ffffff78'} rounded='md' p={['10px 0px 20px', '10px 15px 20px']} mr='10px' position={'relative'}  className='animate fadeInUp one zoom'>
          <Img src='https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/72/apple/285/face-without-mouth_1f636.png' w={['75%', '100%']} m={['0 auto']}></Img>
          <Box position={'absolute'} backgroundColor='white' rounded={'full'} p='2px 10px' bottom={'-10px'} left={['5px', '9px']} fontSize={['11px', '15px']} >Very Bad</Box>
        </Box>
        <Box background={'#ffffff78'} rounded='md' p={['10px 0px 20px', '10px 15px 20px']} mr=' 10px' position={'relative'}   className='animate fadeInUp one zoom'><Img src='https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/72/apple/285/expressionless-face_1f611.png' w={['75%', '100%']} m={['0 auto']}></Img>
          <Box position={'absolute'} backgroundColor='white' rounded={'full'} p='2px 10px' bottom={'-10px'} left={['17px', '28px']} fontSize={['11px', '15px']} >Bad</Box></Box>
        <Box background={'#ffffff78'} rounded='md' p={['10px 0px 20px', '10px 15px 20px']} mr='10px' position={'relative'}   className='animate fadeInUp one zoom'><Img src='https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/72/apple/285/relieved-face_1f60c.png' w={['75%', '100%']} m={['0 auto']}></Img>
          <Box position={'absolute'} backgroundColor='white' rounded={'full'} p='2px 10px' bottom={'-10px'} left={['7px', '13px']} fontSize={['11px', '15px']} >Average</Box></Box>
        <Box background={'#ffffff78'} rounded='md' p={['10px 0px 20px', '10px 15px 20px']} mr='10px' position={'relative'}  className='animate fadeInUp one zoom'><Img src='https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/72/apple/285/smiling-face-with-smiling-eyes_1f60a.png' w={['75%', '100%']} m={['0 auto']}></Img>
          <Box position={'absolute'} backgroundColor='white' rounded={'full'} p='2px 10px' bottom={'-10px'} left={['11px', '19px']} fontSize={['11px', '15px']} >Happy</Box></Box>
      </Flex>
      <Flex mt={['50px', '80px']} justifyContent={'flex-start'} position='relative' w={'100%'} p={['30px']}>
        <Box position={'absolute'} backgroundColor='white' rounded={'full'} p='2px 10px' left={['38px']} top={['20px']} fontSize={['11px', '15px']} zIndex={'999'} className='animate fadeInUp one'>Please share any additional comments</Box>
        <Textarea w={['100%', '520px']} backgroundColor='#ffffff78' height={'225px !important'}></Textarea>
      </Flex>
      <Flex justifyContent={['center', 'flex-end']} w='100%'>
        <Button m={['50px 0px 50px;', '100px 0px 0px;']} borderRadius={['50px', '50px 0px 0px 50px']} backgroundColor='white'>Submit</Button>
      </Flex>
    </Flex>
  )
}

export default CardRight1