import './Gallery.css';
import image1 from '../../../assests/images/gallery/image-1.jpg';
import image2 from '../../../assests/images/gallery/image-2.jpeg';
import image3 from '../../../assests/images/gallery/image-3.jpeg';
import image4 from '../../../assests/images/gallery/image-4.jpeg';
import image5 from '../../../assests/images/gallery/image-5.jpeg';
import image6 from '../../../assests/images/gallery/image-6.jpeg';
import image7 from '../../../assests/images/gallery/image-7.jpeg';
import image8 from '../../../assests/images/gallery/image-8.jpeg';
import image9 from '../../../assests/images/gallery/image-9.jpeg';
import image10 from '../../../assests/images/gallery/image-10.jpeg';
import image11 from '../../../assests/images/gallery/image-11.jpeg';
import image12 from '../../../assests/images/gallery/image-12.jpeg';
import image13 from '../../../assests/images/gallery/image-13.jpeg';
import image14 from '../../../assests/images/gallery/image-14.jpeg';
import image15 from '../../../assests/images/gallery/image-15.jpeg';
import Lightbox from 'yet-another-react-lightbox';
import { useState } from 'react';
import { Counter, Fullscreen, Zoom } from 'yet-another-react-lightbox/plugins';
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

const Gallery = () => {

    const [index, setIndex] = useState(-1);

    const images = [
        {
            src: image1,
            title: "Overview of the society",
            rows: 2,
            cols: 2,
        },
        {
            src: image2,
            title: "Common garden overlooking the Ananta society",
        },
        {
            src: image3,
            title: "Overview of the society from the main road outsideGallery Image 3",
            rows: 2,
        },
        {
            src: image4,
            title: "People enjoying walking on the pavements inside the societyGallery Image 4",
        },
        {
            src: image5,
            title: "Bird's eye view of the society",
            rows: 2,
        },
        {
            src: image6,
            title: "The parking area",
            rows: 2,
            cols: 2,
        },
        {
            src: image7,
            title: "side view of the exterior of the apartements",
        },
        {
            src: image8,
            title: "people having a peaceful time in the middle of the garden overlooking the apartments",
            
        },
        {
            src: image9,
            title: "playarea for children",
        },
        {
            src: image10,
            title: "the living area of the club house",
            rows: 2,
        },
        {
            src: image11,
            title: "the conference room",
            rows: 2,
            cols: 2,
        },
        {
            src: image12,
            title: "club house with the view of the Coffee Club",
        },
        {
            src: image13,
            title: "a woman looking at the apartments in awe",
          
        },
        {
            src: image14,
            title: "the view of swimming pool at night with lights",
        },
        {
            src: image15,
            title: "bird's eye view of the Ananta Apartments",
            cols: 2,
        },
    ]
    function srcset(image, size, rows = 1, cols = 1) {
        return {
          src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
          srcSet: `${image}?w=${size * cols}&h=${
            size * rows
          }&fit=crop&auto=format&dpr=2 2x`,
        };
      }
    return(
        <section className="max-w-8xl m-auto pt-10 px-2.5 text-center flex flex-col gap-5" id="gallery">
            <h3 className="text-3xl uppercase font-semibold text-primary-brown pt-7">Photo Gallery</h3>
            <div className="w-20 h-1 bg-black m-auto"></div>
            {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 tab grid-flow-row gap-5 p-2.5"> */}
                {/* {images.map((item, i) => (
                    <div className='relative  effect-one effect overflow-hidden rounded-md gallery-image w-full h-full' key={i}>
                        <img
                            src={item.src}
                            alt={item.title}
                            className='rounded-md  object-cover cursor-pointer'
                            onClick={() => setIndex(i)}
                        /> */}
                        {/* <p className='text-xs sm:text-sm font-semibold p-1 absolute bottom-2.5 right-2.5 left-auto text-white w-auto'>*Image shown is for illustration purposes only</p> */}
                    {/* </div>
                ))}
                <Lightbox
                    index={index}
                    slides={images}
                    open={index >= 0}
                    close={() => setIndex(-1)}
                    plugins={[Fullscreen, Zoom,  Slideshow,Counter,Thumbnails]}
                    counter={{ container: { style: { top: 0, bottom: "unset" } } }}
                /> */}
                <ImageList
                        variant="quilted"
                        cols={4}
                        rowHeight={200}
                        className='gallery-images-list'
                        >
                        {images.map((item,i) => (
                            <ImageListItem key={i} cols={item.cols || 1} rows={item.rows || 1} className='w-full relative effect-one effect overflow-hidden rounded-md gallery-image'>
                            <img
                                {...srcset(item.src, 121, item.rows, item.cols)}
                                alt={item.title}
                                onClick={() => setIndex(i)}
                                className='rounded-md  object-cover cursor-pointer'
                            />
                            </ImageListItem>
                        ))}

                        <Lightbox
                            index={index}
                            slides={images}
                            open={index >= 0}
                            styles={{slide: { marginTop: "20px" },  toolbar: {background: '#00000054', width: '100%'}, icon:{color: '#fff'} }}
                            controller={{ closeOnBackdropClick: true }}
                            close={() => setIndex(-1)}
                            // slides={advancedSlides}
                            plugins={[Fullscreen, Zoom, Slideshow,Counter,Thumbnails]}
                            counter={{ container: { style: { top: 0, bottom: "unset" } } }}
                        />
                    </ImageList>
            {/* </div> */}
        </section>
    )
}

export default Gallery