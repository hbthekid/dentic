import React from 'react'
import './ProductDetail.css'
import Navbar from '../../components/Navbar/Navbar'
function ProductDetail() {
    return (
        <>
            <Navbar />
            <main className="main">
                <div className="content">
                    <div className="image">
                        <img className="imagen" src="https://s3-sa-east-1.amazonaws.com/buze-backoffice-product-images/1b3f784c-6541-4806-972e-de6ee7c8293d-lg.jpg" />
                    </div>
                    <div className="product-details">
                        <div className="product-details-top">
                            <div className="details-top">
                                <h1 className="title-item">Baltica Dry</h1>
                                <div className="badge-store">Hasta Pronto</div>
                            </div>
                            <div className="details-bottom">
                                <p className="details-display">6 pack</p>
                                <div className="details-price-container">
                                    <h4 className="details-price">Precio:</h4><h2 className="details-price">         $1500</h2>
                                </div>
                            </div>
                        </div>
                        <div className="product-details-bottom">
                            <button className="button-add">Agregar al carro</button>
                        </div>
                    </div>
                </div>
                <div className="product-description">
                    <div className="description-title"><h1>Descripción</h1></div>
                    <div className="description-content"><p>
                        Hazy IPA de 6,5% ABV con lúpulos rotativos. Para esta versión se usaron los lúpulos Motueka (Nueva Zelanda) y Simcoe (USA), que le otorgan notas cítricas, naranja confitada y un fondo de durazno conservero. Es una cerveza jugosa de dulzor residual bajo, lo que le da un amargor redondo y asertivo. Esta modalidad de lúpulo rotativo, nos da la oportunidad de jugar con aromas bajo la misma receta de una cerveza. Así ustedes, nuestros queridos clientes, pueden probar e identificar sus lúpulos favoritos. 6 Pack 6,5% ABV 355 ml</p></div>
                </div>
            </main>
        </>
    )
}

export default ProductDetail
