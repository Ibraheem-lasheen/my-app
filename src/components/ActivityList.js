



import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { Box } from '@mui/material';



export let arrActivity = []





export default function ActivityList() {


    const handelImage = (e,item) => {
        arrActivity.push(item)
        localStorage.setItem("arrActivity", JSON.stringify(arrActivity));
       
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
    img: 'https://www.taabkh.com/files/article/2021/01/kid-sleeping.jpg',
    title: 'النوم للاطفال',
    author: '@bkristastucchio',
  },
  {
    img: 'https://m.media-amazon.com/images/I/519jYsdBfFL._AC_UF350,350_QL80_.jpg',
    title: 'الدخول للمرحاض',
    author: '@rollelflex_graphy726',
  },
  {
    img: 'https://www.sayidaty.net/sites/default/files/styles/900_scale/public/2019/11/13/6114341-337012001.jpg',
    title: 'الاستحمام ',
    author: '',
  },
  {
    img: 'https://tarbiazakia.com/wp-content/uploads/2020/10/434.jpg',
    title: 'مشاهدة التلفاز',
    author: '',
  },
  
];


