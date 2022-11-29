// import React from 'react'
// import ReactDOM from 'react-dom'
//import DropdownTreeSelect from 'react-dropdown-tree-select'
//import Dropdown from 'react-multilevel-dropdown';

const DropdownTree = [
    {
        "label": "Celular",
        "value": "Celular",
        "children": [
            {
                "label": "fones",
                "value": "fones"
            },
            {
                "label": "carregadores",
                "value": "carregadores"
            },
            {
                "label": "capas",
                "value": "capas"
            },
            {
                "label": "outros",
                "value": "outros"
            },
        ]
    },
    {
        
        "label": "Desktop/PCs",
        "value": "Desktop/PCs",
        "children": [
            {
                "label": "notebooks",
                "value": "notebooks"
            },
            {
            "label": "externos",
            "value": "externos",
            "children": [
                {
                "label": "monitores",
                "value": "monitores"
                },
                {
                    "label": "teclados",
                    "value": "teclados"
                },
                {
                    "label": "mouse",
                    "value": "mouse"
                },
                {
                    "label": "headset",
                    "value": "headset"
                },
                {
                    "label": "webcam",
                    "value": "webcam"
                },
                {
                    "label": "gabinetes",
                    "value": "gabinetes"
                },
                {
                    "label": "outros",
                    "value": "outros"
                }
            ]
            },
            {
                "label": "internos",
                "value": "internos",
                "children": [
                    {
                        "label": "placa de vídeo/som",
                        "value": "placa de vídeo/som"
                    },
                    {
                        "label": "placa-mãe",
                        "value": "placa-mãe"
                    },
                    {
                        "label": "processadores",
                        "value": "processadores"
                    },
                    {
                        "label": "memoria",
                        "value": "memoria"
                    },
                    {
                        "label": "outros",
                        "value": "outros"
                    }
                ]
            }
        ]
    },
    {
        "label": "Diversos",
        "value": "Diversos",
        "children": [
            {
                "label": "pendrives",
                "value": "pendrives"
            },
            {
                "label": "cabos usb/hdmi",
                "value": "cabos usb/hdmi"
            },
            {
                "label": "fontes",
                "value": "fontes"
            },
            {
                "label": "outros",
                "value": "outros"
            }
        ]
    }
]

export default DropdownTree;

// const onChange = (currentNode, selectedNodes) => { console.log('onChange::', currentNode, selectedNodes) }
// const onAction = ({action, node}) => { console.log(`onAction:: [${action}]`, node) }
// const onNodeToggle = (currentNode) => { console.log('onNodeToggle::', currentNode) }

// ReactDOM.render(<DropdownTreeSelect onChange={onChange} onAction={onAction} onNodeToggle={onNodeToggle} />, document.nav)  // in real world, you'd want to render to an element, instead of body.