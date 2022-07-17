import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import Rating from '@mui/material/Rating';
import DoneIcon from '@mui/icons-material/Done';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import Chip from '@mui/material/Chip';

function GameCard(props) {
  return (
    <Card border={props?.data?.editors_choice.toLowerCase()==="y"?"warning":"primary"} style={{ width: '19rem', margin:'0.6rem' }}>
      <Card.Header className="d-flex justify-content-between">
        <div style={{fontWeight:"700"}}>{props?.data?.title}</div>
        {props?.data?.editors_choice.toLowerCase()==="y"?
          <Tooltip title="Editors Choice" style={{cursor:"pointer"}}>
            <span>
              <DoneIcon fontSize="medium"/>
            </span>
          </Tooltip>:<div/>}
      </Card.Header>
      <Card.Body>
        <Card.Title style={{fontSize:"1em"}} className="d-flex justify-content-between align-items-center">
          <div>{props?.data?.platform}</div><Chip size="small" label={props?.data?.genre}/>
        </Card.Title>
        <Card.Text>
          <div className="d-flex align-items">
            <span>{props?.data?.score}</span>
            <Rating precision={0.1} name="customized-10" readOnly defaultValue={props?.data?.score} max={10} />
          </div>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default GameCard;
