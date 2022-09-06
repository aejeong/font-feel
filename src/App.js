import './App.css';
import { useState, useEffect } from 'react';

function App() {

  const fontSize = ['10px','11px','12px','13px','14px','15px','16px','17px','18px','19px','20px'];

  const [font, setFont] = useState(fontSize[0]);
  const [isMobile, setIsMobile] = useState(null);

  useEffect(()=>{
    hanlder();
    window.addEventListener('resize', hanlder)
  })

  const hanlder = () => {
    window.innerWidth <= 850 ? setIsMobile('is-mobile') : setIsMobile('is-pc');
  }

  return (
    <div className={`App ${isMobile}`}>
      <div className="button-wrapper">
        { fontSize.map((text, index) => 
            (<button type="button" onClick={ () => setFont(fontSize[index])}>{text}</button>)
        )}
      </div>
      <div className="text-box">
        <p>크기 미리보기</p>
        {
          <p style={{fontSize: font}}>
           국회는 의원의 자격을 심사하며, 의원을 징계할 수 있다. 국가는 재해를 예방하고 그 위험으로부터 국민을 보호하기 위하여 노력하여야 한다. 형사피고인은 유죄의 판결이 확정될 때까지는 무죄로 추정된다.
            대통령이 임시회의 집회를 요구할 때에는 기간과 집회요구의 이유를 명시하여야 한다. 위원은 탄핵 또는 금고 이상의 형의 선고에 의하지 아니하고는 파면되지 아니한다.
            각급 선거관리위원회의 조직·직무범위 기타 필요한 사항은 법률로 정한다. 혼인과 가족생활은 개인의 존엄과 양성의 평등을 기초로 성립되고 유지되어야 하며, 국가는 이를 보장한다.
            국가는 국민 모두의 생산 및 생활의 기반이 되는 국토의 효율적이고 균형있는 이용·개발과 보전을 위하여 법률이 정하는 바에 의하여 그에 관한 필요한 제한과 의무를 과할 수 있다.
          </p>
        }
      </div>
    </div>
  );
}

export default App;
