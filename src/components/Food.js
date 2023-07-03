
import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { Box } from '@mui/material';


export let arrFood = []





export default function FoodList() {


    const handelImage = (e,item) => {
        arrFood.push(item)
        localStorage.setItem("arrFood", JSON.stringify(arrFood));
       
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
    img: 'https://kms.sohati.com/Images/998x749xo/fruit_0.jpg',
    title: 'خضار وفواكه',
    author: '@bkristastucchio',
  },
  {
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Pumpkins.jpg/800px-Pumpkins.jpg',
    title: 'القرع أو اليقطين',
    author: '@rollelflex_graphy726',
  },
  {
    img: 'https://www.aljazeera.net/wp-content/uploads/2021/04/123-9.jpg?resize=1920%2C1280',
    title: 'الدجاج',
    author: '@helloimnik',
  },
  {
    img: 'https://www.clalit.co.il/he/new_article_images/lifestyle/meat%20and%20fish/GettyImages-855749956/wide.jpg',
    title: 'السمك',
    author: '@nolanissac',
  },
  {
    img: 'https://www.kelloggs.com/content/dam/Asia/kelloggs_me_ar/images/health-and-nutrition/it-all-starts-with-the-grain/starts-with-grain.jpg',
    title: 'الحبوب',
    author: '@hjrc33',
  },
  {
    img: 'https://www.foodtodayeg.com/Content/Upload/large/420221023314278618669.jpg',
    title: 'اللحوم',
    author: '@arwinneil',
  },
  {
    img: 'https://www.raya.ps/cached_uploads/crop2/972/558/2022/05/19/legumi-jpg-1652940841.jpg',
    title: 'البقوليات',
    author: '@tjdragotta',
  },
  {
    img: 'https://dqnxlhsgmg1ih.cloudfront.net/storage/attachments/5855/%D8%A3%D9%81%D8%B6%D9%84-6-%D9%85%D9%83%D8%B3%D8%B1%D8%A7%D8%AA-%D9%84%D9%88%D8%B2%D9%86%D9%83-%D9%88%D8%B5%D8%AD%D8%AA%D9%83-1625034853643.jpeg',
    title: 'المكسرات بدون ملح',
    author: '@tjdragotta',
  },
  {
    img: 'https://honnaimg.elwatannews.com/image_archive/841x427/5058964261649671717.jpg',
    title: 'الأرز',
    author: '@tjdragotta',
  }, 
  {
    img: 'https://i0.wp.com/bashasaray.com/wp-content/uploads/2021/09/%D8%A7%D9%84%D9%81%D9%88%D8%A7%D9%83%D9%87-%D8%A7%D9%84%D9%85%D8%AC%D9%81%D9%81%D8%A9-%D8%A7%D9%84%D8%AA%D8%B1%D9%83%D9%8A%D8%A9.jpg?ssl=1',
    title: 'المجففات بدون سكر',
    author: '@tjdragotta',
  }, 
  {
    img: 'https://imgy.pro/foodtoday/1076x714/2202221172350198144169.jpg',
    title: 'خبز القمح',
    author: '@helloimnik',
  },
  {
    img: 'https://static.dw.com/image/17504103_403.jpg',
    title: 'العسل الطبيعي',
    author: '@helloimnik',
  },
  {
    img: 'https://www.justfood.tv/UserFiles/po01062022.gif',
    title: 'البطاطا العادية والبطاطا الحلوة',
    author: '@helloimnik',
  },
  {
    img: 'https://www.alrakia.com/wp-content/uploads/2021/11/%D8%B7%D8%B1%D9%8A%D9%82%D8%A9-%D8%B9%D9%85%D9%84-%D8%A7%D9%84%D9%81%D8%B4%D8%A7%D8%B1-1.jpg',
    title: 'الفشار بدون زيوت',
    author: '@helloimnik',
  },
  {
    img: 'https://assets.nn.najah.edu/CACHE/images/uploads/weblog/2019/05/19/untitled8/d5d7de428bd83ecfcb1fc51dfc980545.jpg',
    title: 'العصائر الطبيعية بدون سكر',
    author: '@helloimnik',
  },
  {
    img: 'https://www.thaqfny.com/wp-content/uploads/2021/03/%D8%A8%D8%B3%D9%83%D9%88%D9%8A%D8%AA-%D9%85%D9%82%D8%B1%D9%85%D8%B4%D8%A7%D8%AA-%D9%85%D8%A7%D9%84%D8%AD%D8%A9.jpg',
    title: 'السناكات ',
    author: '@helloimnik',
  },
];


