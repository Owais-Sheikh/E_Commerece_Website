import React from 'react'
import Sliderm from 'sliderm';
import 'sliderm/src/assets/scss/index.scss';

const slider = () => {
    const sliderm = new Sliderm('.your-class-name', {
        arrow: true,
        pagination: true,
        grouping: false,
        loop: true,
        preview: false,
        columns: 4,
        duration: 1000,
        spacing: 10,
        align: 'center',
      });
      
      sliderm.on('slide.start', () => {
        console.log('Just starting to slide!');
      });
      
      sliderm.on('slide.end', () => {
        console.log('The slider is stopped.');
      });
  return (
    <div className="sliderm your-class-name">
  <div className="sliderm__slider">
    <div className="sliderm__slides">
        <div className="sliderm__slide"><img src="./demo/1.jpg" /></div>
        <div className="sliderm__slide"><img src="./demo/2.jpg" /></div>
        <div className="sliderm__slide"><img src="./demo/3.jpg" /></div>
        <div className="sliderm__slide"><img src="./demo/4.jpg" /></div>
        <div className="sliderm__slide"><img src="./demo/5.jpg" /></div>
    </div>
  </div>
</div>
  )
}

export default slider