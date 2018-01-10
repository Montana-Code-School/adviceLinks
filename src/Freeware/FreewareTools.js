import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './FreewareTools.css';
class FreewareTools extends Component {
render(){
  return(
    <div className="Freeware-main">
   <p> I found this coding library tool by googling “Offline documentation”</p>
    <p><a href='https://zealdocs.org/'>Zeal</a></p>
   <p> This is a free easy to use offline dictionary with a hotkey to look at the word quickly: Normally its CTRL+ALT+W, it’s in Options to see.</p>
    <p><a href='http://artha.sourceforge.net/wiki/index.php/Home'>Artha</a></p>
   <p>7-Zip:</p>
    <p>This tool is for extracting several different file types.</p>
    <a href='http://www.7-zip.org/'>7-Zip</a>
    <p>This allows EPUB and txt files to be read like a book.</p>
    <p><a href='https://fbreader.org/'>Free Ebook Reader such as Epub & txt files</a></p>
    <p>Kiwix:</p>
    <p><a href='http://www.kiwix.org/'>Kiwix for Offline Websites including Wikipedia</a></p>
    <p>Kiwix>Download>See All Available Content <a href='http://wiki.kiwix.org/wiki/Content'>All Content Shortcut</a></p>
    </div> 
  );
}
}
export default FreewareTools;