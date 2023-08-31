import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../index.css'


function BasicExample(props) {
    console.log(props);
  return (
    <div className="card-main">
    <div className="card-img">
    <Card className='flex-img m-4 text-center' style={{ width: '18rem'}}>
      <Card.Img variant="top" src={props.img} style={{width : '18rem' , height : '15rem' }} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
       {props.desc}
        </Card.Text>
        <Button variant="light">Buy now</Button>
      </Card.Body>
    </Card>
    </div>
    </div>
  );
}

export default BasicExample;

