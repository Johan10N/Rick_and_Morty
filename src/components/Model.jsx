import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';

function MydModalWithGrid(propsmodel) { 
 
  return (
    <Modal {...propsmodel} aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
         Detalle de {propsmodel.nombre}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="grid-example">
        <Container>
          <Row>
            <Col xs={6} md={4}>
            {propsmodel.vida==="Alive"? (
            <>
            <span className="alive">&nbsp;</span><span>Vivo</span>
            </>
            ):(
            <>
            <span className="dead">&nbsp;</span><span>Muerto</span>
            </>
            )      
          }
            </Col>
            <Col xs={6} md={4}>
            <span className="episodios"><b>Episodios: </b></span>
        <span>{propsmodel.Episodios}</span>
            </Col>
            <Col xs={6} md={4}>
            <span className="especie"><b>Especie: </b></span>
        <span>{propsmodel.especie}</span>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={propsmodel.onHide}>Cerrar</Button>
      </Modal.Footer>
    </Modal>
  );
}


export default MydModalWithGrid;