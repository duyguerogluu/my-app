import logo from './logo.svg';
import './App.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Fragment, useState, useEffect } from "react";
import Service from "../service/service";



function App() {
 
const [apiProducts, setApiProducts] = useState([]); 
useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await Service.getDeneme();
        setApiProducts(response);

      } catch (error) {
        console.error('Ürünleri getirirken bir hata oluştu:', error);
      }
    };


    fetchProducts();

    const products = apiProducts.map(apiProduct => new products(apiProduct));
    //setCurrentData(sortedProducts?.slice(offset, offset + pageLimit));
  }, []);

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         deneme.image
        </Typography>
        <Typography variant="body2" color="text.secondary">
          
        </Typography>
      </CardContent>
    </Card>
  );
}

export default App;
