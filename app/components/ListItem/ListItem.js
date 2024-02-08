import React, {useState} from 'react';

import ReactCardFlip from "react-card-flip";
import Markdown from "react-markdown";
import remarkGfm from 'remark-gfm'
import {styled} from "styled-components";


const Card = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  background: #e3e3e3;
  padding: 1.5em 2em;
  border-radius: 10px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  width: auto;
  min-height: ${(props) => props.height || 'auto'};
  overflow: hidden;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: #cbcbcb;
    box-shadow: 0 5px 50px rgba(255, 255, 255, 0.4);
  }
`;

const ListItem = (props) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const defaultHeight = "300px";

    const alternateState = () => {
        setIsFlipped(!isFlipped);
    }

    return (
        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
            <Card onClick={alternateState} height={defaultHeight}>
                <h2 className="font-bold text-2xl">{props.title}</h2>
                <div style={{marginTop: "auto"}}>
                    <p className="text-neutral-500 text-md">{props.type}</p>
                    <span className="text-green-700 text-sm">{props.itemIndex}</span>
                </div>
            </Card>

            <Card onClick={alternateState} height={defaultHeight}>
                <div className="overflow-auto">
                    <Markdown remarkPlugins={[remarkGfm]}
                              components={{
                                  strong: ({ node, ...rest }) => (
                                      <b style={{ color: '#0049e3' }} {...rest} />
                                  ),
                                  h1: ({ node, ...rest }) => (
                                      <h1 style={{ fontSize: '1.3em' }} {...rest} />
                                  ),
                                  h2: ({ node, ...rest }) => (
                                      <h2 style={{ fontSize: '1.2em' , fontWeight: "bold"}} {...rest} />
                                  ),
                                  h3: ({ node, ...rest }) => (
                                      <h3 style={{ fontSize: '1.1em' }} {...rest} />
                                  ),
                                  blockquote: ({ node, ...rest }) => (
                                      <blockquote style={{ background: "#d0cfcf", borderRadius: 2, marginTop: 10, marginBottom: 10, padding: 3}} {...rest} />
                                  ),
                                  li: ({ node, ...rest }) => (
                                      <li className={"list-disc"} {...rest} />
                                  ),
                              }}
                    >{props.description}</Markdown>
                </div>
            </Card>
        </ReactCardFlip>
    );
};

export default ListItem;