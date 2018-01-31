import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Freeware.css';
import FreewareGames from './FreewareGames';
class FreewareTools extends Component {
  render() {
    return (
      <div className="Freeware-main">
        <p> I found this coding library tool by googling “Offline documentation”</p>
        <p><a href='https://zealdocs.org/'>Zeal</a></p>
        <p> This is a free easy to use offline dictionary with a hotkey to look at the word quickly: Normally its CTRL+ALT+W, it’s in Options to see.</p>
        <p><a href='http://artha.sourceforge.net/wiki/index.php/Home'>Artha</a></p>
        <p>7-Zip:</p>
        <p>This tool is racting several different file types.</p>
        <a href='http://www.7-zip.org/'>7-Zip</a>
        <p>This allows EPUB and txt files to be read like a book.</p>
        <p><a href='https://fbreader.org/'>Free Ebook Reader such as Epub & txt files</a></p>
        <p><a href='https://www.gutenberg.org/'>Project Guttenberg</a></p>
        <p>Kiwix:</p>
        <p><a href='http://www.kiwix.org/'>Kiwix for Offline Websites including Wikipedia</a></p>
        <p>Kiwix>Download>See All Available Content <a href='http://wiki.kiwix.org/wiki/Content'>All Content Shortcut</a></p>
        <p>Pluto TV is offcially live free TV with 75+ channels it depends on its revenue from ads.  Alsoe it is on <a href='http://pluto.tv/'>multiple platforms</a> from: Amazon App Store, Roku, Apple Store, Windows Store, Google Play Store, Samsung Store, Sony store for PS3 & PS4.</p>
        <p>Hint about using Pluto TV on a tablet or phone is to turn the device side ways to show the entire channel schedule.</p>
        <p><a href='https://www.crackle.com/'>Crackle</a> is owned by Sony and each month the selection changes for what movies are free to watch with adds.</p>
        <p><a href='http://publicdomainmovies.net/'>Public Domain Movies</a></p>
        <p><a href='https://librivox.org/'>LibriVox</a>: Free public domain works adapted into free Audio Books</p>
        <FreewareGames/>
        </div>
    );
  }
}
export default FreewareTools;