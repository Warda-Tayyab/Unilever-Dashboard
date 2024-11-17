import React from 'react'
import SearchPage from '../Components/SearchPage/SearchPage'
import Cards from '../Components/Cards/Cards'
import AnnualReport from '../Components/AnnualReport/AnnualReport'
import UnileverPage from '../Components/UnileverPage/UnileverPage'
import BrandShowcase from '../Components/BrandShowcase/BrandShowcase'
import BackToTopButton from '../Components/Back/BackToTopButton'
import LatestNews from '../Components/LatestNews/LatestNews'

const Page = () => {
  return (
    <>
  <BackToTopButton></BackToTopButton>
    <UnileverPage/>
    <LatestNews></LatestNews>
    <BrandShowcase></BrandShowcase>
    <AnnualReport/>
    <Cards/>
    <SearchPage/>
    
    </>
  )
}

export default Page
