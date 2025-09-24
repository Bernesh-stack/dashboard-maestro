import React from 'react'
import { ColorPickerComponent } from '@syncfusion/ej2-react-inputs';

import { Header } from '../components'

const ColorPickerApp = () => {
  // Update preview background when color is selected
  const change = (args) => {
    const preview = document.getElementById('preview');
    if (preview) {
      preview.style.backgroundColor = args.currentValue.hex;
    }
  };

  return (
    <div className='m-2 md:m-10 mt-24 md:p-10 bg-white rounded-3xl'>
      <Header category="App" title="Color Picker" />

      <div className='text-center'>
        {/* Preview box */}
        <div 
          id='preview' 
          className='w-32 h-32 mx-auto rounded-lg shadow-md border mb-6'
        ></div>

        <div className='flex justify-center items-center gap-20 flex-wrap'>
          <div>
            <p className='text-2xl mt-2 mb-4 font-semibold'>Inline Palette</p>
            <ColorPickerComponent
              id='inline-pallete'
              mode='Palette'
              modeSwitcher={false}
              inline={true}
              showButtons={false}
              change={change}   
            />
          </div>

          <div>
            <p className='text-2xl mt-2 mb-4 font-semibold'>Inline Picker</p>
            <ColorPickerComponent
              id='inline-pallete'
              mode='Picker'
              modeSwitcher={false}
              inline={true}
              showButtons={false}
              change={change}   
            />
            </div>

         
        </div>
      </div>
    </div>
  )
}

export default ColorPickerApp
