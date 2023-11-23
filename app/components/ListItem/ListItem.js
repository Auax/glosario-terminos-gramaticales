import React, {useState} from 'react';

import ReactCardFlip from "react-card-flip";
import Markdown from "react-markdown";
import {styled} from "styled-components";


const Card = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  background: #e3e3e3;
  padding: 1.5em;
  border-radius: 10px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  width: auto;
  height: ${(props) => props.height || 'auto'};
  overflow: hidden;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    scale: 105%;
  }
`;

const ListItem = (props) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const defaultHeight = "300px";

    const alternateState = () => {
        setIsFlipped(!isFlipped);
    }

    return (
        <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
            <Card onClick={alternateState} height={defaultHeight}>
                <h2 className="font-bold text-2xl">{props.title}</h2>
                <div style={{marginTop: "auto"}}>
                    <p className="text-neutral-500 text-sm">{props.type}</p>
                    <span className="text-green-700 text-sm">{props.itemIndex}</span>
                </div>
            </Card>

            <Card onClick={alternateState} height={defaultHeight}>
                <Markdown
                    components={{
                        strong(props) {
                            const {node, ...rest} = props
                            return <b style={{color: '#0049e3'}} {...rest} />
                        }
                    }}
                >{props.description}</Markdown>
            </Card>
        </ReactCardFlip>
    );
};

export default ListItem;