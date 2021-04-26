import React, { useEffect, useState, useContext } from "react";
import productContext from "../../context/productos/productContext";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import ReactImageZoom from "react-image-zoom";
import "../styles/ProductDetail.css";
import { productsData } from "../test/Datos";

const ProductDetail = () => {
  const productsContext = useContext(productContext);
  const { addToBasket } = productsContext;
  const rating = ["⭐", "⭐", "⭐", "⭐", "⭐"];
  const { id } = useParams();
  const productDetail = productsData.find((e) => e.id === id);

  const [image, setImage] = useState(productDetail.image);
  const props = {
    zoomLensStyle:
      'background-image:url("https://images-na.ssl-images-amazon.com/images/G/30/apparel/rcxgs/tile._CB483369954_.gif")',
    width: 475,
    offset: { vertical: 0, horizontal: 100 },
    img: image,
  };

  const changeImage = (e) => {
    setImage(e.target.value);
  };

  return (
    <section className="bg-white">
      <section className="productDetail">
        <section className="productDetail__banner">
          <Link href="">
            <img
              src="https://images-eu.ssl-images-amazon.com/images/G/30/EUBluefield/FDFO/XCM_Manual_1322705_1657370_ES_es_it_fr_uk_embrace_amazon_ilm_ES_Browser_ILM_3792163_650x45_1X_it_IT._CB654710419_.jpg"
              alt=""
            />
          </Link>
        </section>
        <section className="productDetail__goBack">
          <span>‹</span>
          <Link to="/products">Volver a los resultados</Link>
        </section>
        <section className="grid__row-3 productDetail__container">
          <section className="productDetail__imageGallery">
            <section className="productDetail__imageGalleryImage">
              <ReactImageZoom {...props} />
            </section>
            <div className="productDetail__canvasCaption text-1">
              Pasa el ratón por encima de la imagen para ampliarla
            </div>
            <div className="productDetail__canvasCaption text-2">
              Haz click para obtener una vista ampliada
            </div>
            <ul className="productDetail__imageGalleryList">
              {productDetail.imageGallery_1 ? (
                <li className="productDetail__imageGalleryListItem">
                  <input
                    type="submit"
                    value={productDetail.imageGallery_1}
                    onMouseOver={changeImage}
                  />
                  <img src={productDetail.imageGallery_1} alt="" />
                </li>
              ) : null}

              {productDetail.imageGallery_2 ? (
                <li className="productDetail__imageGalleryListItem">
                  <input
                    type="submit"
                    value={productDetail.imageGallery_2}
                    onMouseOver={changeImage}
                  />
                  <img src={productDetail.imageGallery_2} alt="" />
                </li>
              ) : null}

              {productDetail.imageGallery_3 ? (
                <li className="productDetail__imageGalleryListItem">
                  <input
                    type="submit"
                    value={productDetail.imageGallery_3}
                    onMouseOver={changeImage}
                  />
                  <img src={productDetail.imageGallery_3} alt="" />
                </li>
              ) : null}

              {productDetail.imageGallery_4 ? (
                <li className="productDetail__imageGalleryListItem">
                  <input
                    type="submit"
                    value={productDetail.imageGallery_4}
                    onMouseOver={changeImage}
                  />
                  <img src={productDetail.imageGallery_4} alt="" />
                </li>
              ) : null}

              {productDetail.imageGallery_5 ? (
                <li className="productDetail__imageGalleryListItem">
                  <input
                    type="submit"
                    value={productDetail.imageGallery_5}
                    onMouseOver={changeImage}
                  />
                  <img src={productDetail.imageGallery_5} alt="" />
                </li>
              ) : null}

              {productDetail.imageGallery_6 ? (
                <li className="productDetail__imageGalleryListItem">
                  <input
                    type="submit"
                    value={productDetail.imageGallery_6}
                    onMouseOver={changeImage}
                  />
                  <img src={productDetail.imageGallery_6} alt="" />
                </li>
              ) : null}
            </ul>
          </section>
          <section className="productDetail__resumeDetails">
            <h1 className="productDetail__title">{productDetail.title}</h1>
            <div>
              {rating.splice(0, productDetail.rating)}
              <span>{productDetail.ratingCount}</span>
            </div>
            <hr/>
            <div>
              <table>
                <tbody>
                  <tr>
                    <td>
                      Precio anterior{" "}
                      <span className="productDetail__priceLow">
                        {productDetail.priceReal} €
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Precio de la oferta{" "}
                      <span className="productDetail__price">
                        {productDetail.priceLow} €
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <hr/>
            <h4>Descripcion</h4>
            <div className="productDetail__description">
              {productDetail.description}
            </div>
            <hr/>
          </section>
          <section className="productDetail__buyBox">
            <span className="productDetail__price">
              {productDetail.priceLow} €
            </span>
            <div>
              <button
                className="button-primary m-0"
                onClick={() => addToBasket(productDetail)}
              >
                Añadir a la cesta
              </button>
            </div>
          </section>
        </section>
      </section>
    </section>
  );
};

export default ProductDetail;
