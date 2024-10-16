import React , {useState , useEffect} from 'react';

import Header from '../../Components/Header/Header';
import PageIntro from '../../Components/PageIntro/PageIntro';
import Items from '../../Components/Items/Items';
import Footer from '../../Components/Footer/Footer';

import style from './Shop.module.css';



const Shop = () => {

    const introHeader = "Shop";
    const introParagraph = "Shop now and transform your lifestyle with our exclusive collections. Enjoy fast shipping and exceptional customer service.";

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('/JSONs/Chairs.json')
            .then((response) => response.json())
            .then((data) => setProducts(data))
            .catch((error) => console.error('Error fetching the products:', error));
    },[]);


    return (
        <div className={style.shop}>
            <Header />
            <PageIntro 
                introHeader={introHeader}
                introParagraph={introParagraph}
                showImage={false}
                showButtons={false}
            />

            <div className={style.productsContainer}>
                <div className={style.products}>
                    {products.length > 0 ? (
                        products.map((product) => (
                            <Items
                                id={product.id}
                                imgSrc={product.imgSrc} 
                                name={product.title} 
                                price={product.price}
                            />
                        ))
                    ) : (
                        <p>Loading products...</p>
                    )}
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Shop;