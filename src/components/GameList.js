

import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { Box } from '@mui/material';



export let arrGames = []





export default function GameList() {


    const handelImage = (e,item) => {
        arrGames.push(item)
        localStorage.setItem("arrGames", JSON.stringify(arrGames));
       
    }
   
  return (
   <Box
   sx={{
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    width:'100%',
    
    
   }}
   >
        <ImageList sx={{ width: '50%', height: '65%' }}>
        {itemData.map((item) => (
            <ImageListItem key={item.img}>
            <img
                src={`${item.img}?w=248&fit=crop&auto=format`}
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
                onClick={(e) => handelImage(e,item)}
            />
            <ImageListItemBar
                title={item.title}
                // subtitle={<span>by: {item.author}</span>}
                position="below"
            />
            </ImageListItem>
        ))}
        </ImageList>
   </Box>
  );
}

const itemData = [
  {
    img: 'https://images-na.ssl-images-amazon.com/images/I/71knyAjW6bL._AC_SL500_.jpg',
    title: 'لعبة الفقاعات',
    author: '@bkristastucchio',
  },
  {
    img: 'https://static2.mumzworld.com/media/catalog/product/w/m/wmt-ra181-lakeshore-best-buy-jumbo-building-bricks-180pcs-1537277660.jpg',
    title: 'لعبة تركيب المكعبات',
    author: '@rollelflex_graphy726',
  },
  {
    img: 'https://m.media-amazon.com/images/I/410Bq8WWRVL._AC_UF1000,1000_QL80_.jpg',
    title: 'العاب سيارات',
    author: '@helloimnik',
  },
  {
    img: 'https://a3td.net/wp-content/uploads/2019/08/1867.jpg',
    title: 'دمية باربي للبنات',
    author: '@nolanissac',
  },
  {
    img: 'https://media.zid.store/thumbs/60627c9d-86bb-4974-a84a-5adc0357b476/10b4492f-e1b1-4f64-a786-952796da4ed0-thumbnail-770x770-70.jpg',
    title: 'دفتر رسم وتلوين',
    author: '@hjrc33',
  },
 
];


