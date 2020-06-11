import React from 'react'
import EmailEditor from 'react-email-editor'
import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    height: 100%;
    font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
  }
  #demo {
    height: 100%;
  }
  .blockbuilder-placeholder-empty{
    height: 800px;
  }
`
const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100%;
`

const Bar = styled.div`
  flex: 1;
  color: #000;
  padding: 10px;
  display: flex;
  max-height: 40px;
  h1 {
    flex: 1;
    font-size: 16px;
    text-align: left;
  }
  button {
    flex: 1;
    padding: 10px;
    margin-left: 10px;
    font-size: 14px;
    font-weight: bold;
    background-color: #000;
    color: #FFF;
    border: 0px;
    max-width: 150px;
    cursor: pointer;
  }
`

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      Html : null
    } 
  }

  exportHtmls = () => {
    this.editor.exportHtml(data => {
      const { design, html } = data
      console.log('exportHtml', html)
      this.setState({
        Html : html
      }
      )
    })
  }

  saveDesign = () => {
    this.editor.saveDesign(design => {
      console.log('saveDesign', design)
      alert("Design JSON has been logged in your developer console")
    })
  }


  render() {

    return(
      <div>
        <React.Fragment>
          <GlobalStyle />
          <Container>
            <EmailEditor
            ref={editor => this.editor = editor}
            projectId={1001}
            minHeight="550px"
            options={{
              features: {
                colorPicker: {
                  presets: ['#D9E3F0', '#F47373', '#697689', '#37D67A', '#2CCCE4', '#555555', '#DCE775']
                }
              },

              appearance: {
                theme: 'dark',
                panels: {
                  tools: {
                    dock: 'left'
                  }
                }
              },
    
              tools: {
                button: {
                  enabled: false
                },
                divider: {
                  enabled: false
                },
                html: {
                  enabled: false
                },
                layout: {
                  enabled: false
                }
              },

              customCSS: [
                `
                  body {
                    background-color: yellow;
                  }
                `
              ]
            }}
          />
            <Bar>
              <div style={{marginTop: "20px", textAlign: "center"}}>
                <button onClick={this.exportHtmls} >Export HTML</button>
                <button onClick={this.saveDesign} >Save Design</button>
            </div>
            </Bar>
          </Container>
        </React.Fragment>
        
        
        <div dangerouslySetInnerHTML={{__html: this.state.Html}}>
        </div>
      </div>
    ) 
    
  }
}


export default App;