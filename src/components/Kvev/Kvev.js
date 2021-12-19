import React, { useState } from 'react';
import kvevImage from '../../assets/images/geom-test-image.png'
import useGaTracker from '../useGaTracker'

const Kvev = () => {
  useGaTracker();
  const [VEV, setVEV] = useState(null);
  const [EBITDA, setEBITDA] = useState(null);
  const [FIRSTYEAR, setFIRSTYEAR] = useState(null);
  const [SECONDYEAR, setSECONDYEAR] = useState(null);
  const [THIRD, setTHIRD] = useState(null);
  const [FOUR, setFOUR] = useState(null);
  const [FIVE, setFIVE] = useState(null);
  const [result, setResult] = useState(null);

  const calculate = () => {
    console.log((FIRSTYEAR / Math.pow((1+0.2),1)) + (SECONDYEAR / Math.pow((1.2),2)) + (THIRD / Math.pow((1.2),3)) + (FOUR / Math.pow((1.2),4)) + (FIVE / Math.pow((1.2),5)) - VEV);
    let kvev = ((FIRSTYEAR / Math.pow((1+0.2),1)) + (SECONDYEAR / Math.pow((1.2),2)) + (THIRD / Math.pow((1.2),3)) + (FOUR / Math.pow((1.2),4)) + (FIVE / Math.pow((1.2),5)) - VEV).toFixed(2);
    setResult(kvev);
  };

  return (
    <div className="kvev-container">
        <div className="kvev-container__left">
            <h1 className="kvev-header">
                Інвестиційний калькулятор <br/> для оцінки NPV
            </h1>
            <div  className="kvev-form__container">
                <div className="kvev-form__input-container">
                    <label className="kvev-form__input-label">
                        Початкова інверстиція, грн:
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
                        Очікуваний дохід за 5 років, грн:
                    </label>
                    <div className="webflow-style-input">
                        <input
                            type="number"
                            onChange={(el) => setFIRSTYEAR(el.target.value)}
                        />
                    </div>
                    <div className="webflow-style-input">
                        <input
                            type="number"
                            onChange={(el) => setSECONDYEAR(el.target.value)}
                        />
                    </div>
                    <div className="webflow-style-input">
                        <input
                            type="number"
                            onChange={(el) => setTHIRD(el.target.value)}
                        />
                    </div>
                    <div className="webflow-style-input">
                        <input
                            type="number"
                            onChange={(el) => setFOUR(el.target.value)}
                        />
                    </div>
                    <div className="webflow-style-input">
                        <input
                            type="number"
                            onChange={(el) => setFIVE(el.target.value)}
                        />
                    </div>
                </div>
                <div className="kvev-form__input-container">
                    <label className="kvev-form__input-label">
                        Коефіцієнт дисконтування
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
                    Обчислити
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
