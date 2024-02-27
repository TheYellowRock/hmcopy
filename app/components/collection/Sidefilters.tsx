import { Link } from '@remix-run/react'
import React from 'react'

const filtersList = [
    {
        name:'Newest Arrivals',
        links :[
            {
                name:'View All',
                link:'#'
            },
            {
                name:'Clothes',
                link:'#'
            },
            {
                name:'Shoes & Accessories',
                link:'#'
            },
            {
                name:'Beauty',
                link:'#'
            },
            {
                name:'Underwear & Nightwear',
                link:'#'
            },
            {
                name:'Sport',
                link:'#'
            },
        ]

    },
    {
        name:'Trending Now',
        links :[
            {
                name:'Style Inspiration',
                link:'#'
            }
        ]

    },
    {
        name:'Shop by Occasion',
        links :[
            {
                name:'The Occasion Shop',
                link:'#'
            }
        ]

    },
    {
        name:'Shop by Product',
        links :[
            {
                name:'View All',
                link:'#'
            },
            {
                name:'Clothes',
                link:'#'
            },
            {
                name:'Shoes & Accessories',
                link:'#'
            },
            {
                name:'Beauty',
                link:'#'
            },
            {
                name:'Underwear & Nightwear',
                link:'#'
            },
            {
                name:'Sport',
                link:'#'
            },
        ]

    }
]

export default function Sidefilters() {
  return (
    <div>
      <div className='flex flex-col'>
        {filtersList.map((filterGroup) => (
            <div className='flex flex-col px-10 py-5'>
                <div className='font-semibold text-lg py-2'>{filterGroup.name}</div>
                {filterGroup.links.map((filterLink) => (
                    <Link to={filterLink.link} className=' hover:text-textMembership hover:underline '>{filterLink.name}</Link>
                ))}
            </div>
        ))}
      </div>
    </div>
  )
}
