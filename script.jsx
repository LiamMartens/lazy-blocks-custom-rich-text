import 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill';

const { addFilter } = wp.hooks;
const { createElement } = wp.element;

const Control = ({ value, onChange }) => {
  return (
    createElement(ReactQuill, {
      theme: 'snow',
      value,
      onChange,
    })
  )
}

/**
 * Control render in editor.
 */
addFilter('lzb.editor.control.extended_rich_text.render', 'lzb.editor', (render, props) => {
  const { getValue, onChange } = props;
  return createElement(Control, {
    value: getValue(),
    onChange,
  })
});

/**
 * Control settings render in constructor.
 */
 addFilter('lzb.constructor.control.extended_rich_text.settings', 'lzb.constructor', (render, props) => {
  // @README no settings
  return null;
});
