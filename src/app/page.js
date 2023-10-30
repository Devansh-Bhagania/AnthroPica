import Image from 'next/image'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import Navbar from "@/app/components/Navbar"
import HeroSlider from './components/HeroSlider'
import TextCards from './components/TextCards'
import OurPartners from './components/OurPartners'
import OurModels from './components/OurModels'

export default function Home() {
  return (
   <>
   {/* Home Page
   <Card>
  <CardBody>
    <CardHeader>View a summary of all your customers over the last month.</CardHeader>
  </CardBody>
</Card>

<Button colorScheme='blue'>Button</Button> */}
<Navbar/>
<HeroSlider/>
<OurPartners/>
<OurModels/>

   </>

  )
}
