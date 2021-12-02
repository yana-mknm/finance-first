import React, { useState } from 'react';

import kvevImage from '../../assets/images/geom-test-image.png'

const Kvev = () => {
  const [VEV, setVEV] = useState(null);
  const [EBITDA, setEBITDA] = useState(null);
  const [result, setResult] = useState(null);

  const calculate = () => {
    console.log(VEV / (12 * EBITDA));
    let kvev = (VEV / (12 * EBITDA)).toFixed(2);
    setResult(kvev);
  };

  return (
    <div className="kvev-container">
        <div className="kvev-container__left">
            <h1 className="kvev-header">
                Коефіцієнт мультиплікатор вартості для порівнювального підприємства
            </h1>
            <div  className="kvev-form__container">
                <div className="kvev-form__input-container">
                    <label className="kvev-form__input-label">
                        Ринкова вартість порівнювального підприємства, грн:
                    </label>
                    <div className="webflow-style-input">
                        <input
                            type="number"
                            onChange={(el) => setVEV(el.target.value)}
                        />
                    </div>
                </div>
                <div className="kvev-form__input-container">
                    <label className="kvev-form__input-label">
                        Фінансовий показник, який відображає дохід підприємства до виплати
                        відсотків, податків і амортизаційних відрахувань за місяць, грн:
                    </label>
                    <div className="webflow-style-input">
                        <input
                            type="number"
                            onChange={(el) => setEBITDA(el.target.value)}
                        />
                    </div>
                </div>
                <button
                    className="button button-blue"
                    onClick={calculate}
                >
                    Calculate
                </button>
            </div>
            <div className="kvev-result__container">
                <h2 className="kvev-result__header">Результат: </h2>
                <p className="kvev-result__text">{result}</p>
            </div>
        </div>

        <div className="kvev-container__right">
            <img
                src={kvevImage}
                alt="kvev-image"
                className="kvev-image"
            />
        </div>
    </div>
  );
};

export default Kvev;
