import React from 'react';
import { Card, Col, Row } from 'antd';
import { Outlet } from 'react-router-dom';
import CountriesList from '../components/CountriesList';

function Countries() {
  return (
    // Ponemos el maximo de alto igual que el contenido (100vh - navbar height - footer height)
    // asignamos una propiedad de alto para que el resto de elementos la puedan tener como referencia
    <Row
      gutter={16}
      style={{ maxHeight: 'calc(100vh - 128.09px)', height: '100%' }}
    >
      {/* ahora podemos usar 100% del alto (del contenedor padre, como alto de la lista y hacerla scrolleable) */}
      <Col span={8} style={{ height: '100%', overflow: 'scroll' }}>
        <CountriesList />
      </Col>
      {/* ahora podemos usar 100% del alto (del contenedor padre y como no es scrolleable siempre se mantiene en su lugar)*/}
      <Col span={16} style={{ height: '100%' }}>
        <Card style={{ height: '100%' }}>
          <Outlet />
        </Card>
      </Col>
    </Row>
  );
}

export default Countries;
