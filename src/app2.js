import React from 'react'
import 'tui-image-editor/dist/tui-image-editor.css'
import ImageEditor from '@toast-ui/react-image-editor'

const App = () => {
  const handleClickButton = () => {
    console.log('loadedddd');
  };

  return (
    <div>
      <ImageEditor
        includeUI={{
          loadImage: {
            path: 'img/sampleImage.jpg',
            name: 'SampleImage'
          },
          menu: ['shape', 'filter', 'text'],
          uiSize: {
            width: '100%',
            height: '700px'
          },
          menuBarPosition: 'left'
        }}
        cssMaxHeight={500}
        cssMaxWidth={700}
        selectionStyle={{
          cornerSize: 20,
          rotatingPointOffset: 70
        }}
        usageStatistics={true}
      />

    <button onClick={handleClickButton}>Flip image by X Axis!</button>

    </div>
  )
}
export default App;