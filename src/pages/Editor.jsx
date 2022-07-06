import { 
  //Primero usar el componente RichTextEditorComponent dentro de el usar el Inject
  RichTextEditorComponent, 
  // Inject
  Inject, 
  HtmlEditor, 
  Image,  
  Link, 
  QuickToolbar,  
  Toolbar } from '@syncfusion/ej2-react-richtexteditor';

import { Header } from '../components';
import { EditorData } from '../data/dummy';

const Editor = () => {
  return (
    <div className="m-2 md:m-10 mt-40 p-2 md:p-10 bg-white rounded-3xl">
    <Header category="App" title="Editor" />
    <RichTextEditorComponent>
      {/* Aca puedes poner cualquier html para que edites el texto */}
      <EditorData />
      <Inject services={[HtmlEditor, Toolbar, Image, Link, QuickToolbar]} />
    </RichTextEditorComponent>
  </div>
  )
}

export default Editor