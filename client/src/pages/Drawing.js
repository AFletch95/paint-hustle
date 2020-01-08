import React, { useState, useEffect } from 'react';
import Canvas from '../components/Canvas';

import SVG from '../utils/SVG';

function Drawing() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [getSVG, setGetSVG] = useState(null);

  const saveCanvas = () => {
    const svgString = getSVG();
    const svg = new DOMParser().parseFromString(svgString, 'text/html').body.firstChild;
    const scale = {
      x: 1 / Number(svg.getAttribute('width')),
      y: 1 / Number(svg.getAttribute('height')),
    };
    SVG.scale(svg, scale);

    const tmp = document.createElement('div');
    tmp.appendChild(svg);
    console.log(tmp.innerHTML);
  };

  return (
    <div className="container">
      <form className="text-left my-0">
        <div className="form-group m-3">
          <div className="row">
            <div className="col-md-4">
              <input
                id="title"
                className="form-control"
                type="text"
                placeholder="Title"
                aria-describedby="title"
                value={title}
                onChange={e => setTitle(e.target.value)}
              />
            </div>
          </div>
        </div>
        <Canvas setGetSVG={setGetSVG} />
        <div className="form-group m-3">
          <textarea
            id="description"
            className="form-control"
            type="text"
            rows="3"
            placeholder="Description"
            aria-describedby="description"
            value={description}
            onChange={e => setDescription(e.target.value)}
            style={{ minHeight: '2.5rem' }}
          />
        </div>
        <div className="text-center">
          <div type="submit" className="btn btn-success" onClick={saveCanvas}>
            Save
          </div>
        </div>
      </form>
    </div>
  );
}

export default Drawing;
