import { Carousel } from 'antd';

const contentStyle: React.CSSProperties = {
  margin: 30,
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: 'black',
};

export function Carrousel(){
    return(
        <>
        <Carousel arrows dotPosition="left" infinite={false} adaptiveHeight={true}>
        <div>
          <h3 style={contentStyle}><img src="Captura de pantalla 2025-02-16 182949.png" alt="" /></h3>
        </div>
        <div>
          <h3 style={contentStyle}><img src="Captura de pantalla 2025-02-16 183004.png" alt="" /></h3>
        </div>
        <div>
          <h3 style={contentStyle}><img src="Captura de pantalla 2025-02-16 183021.png" alt="" /></h3>
        </div>
      </Carousel>
    </>
    )
}



