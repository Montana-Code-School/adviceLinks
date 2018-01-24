import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Freeware.css';
import GameEngines from '../Game-Engines/Game-Engines';
class FrewareGames extends Component {
  render() {
    return (
      <div className="Freeware-main">
        <h1>Freeware Games</h1>
        <p><a href='https://www.locomalito.com/'>Arcade inspired Free Games</a></p>
        <p>Super Crate Box <a href='http://www.supercratebox.com/'>Offical Website</a> or <a href='http://store.steampowered.com/app/212800/Super_Crate_Box/'>Steam</a></p>
        <p><a href='https://itch.io/'>Freeware Games from Itchio</a></p>
        <p><a href='https://gamejolt.com/'>GameJolt</a></p>
        <p><a href='http://www.indiedb.com/'>IndieDB</a>: are free Games</p>
        <p><a href='https://www.artsoft.org/'>Rocks N' Diamonds</a></p>
        <p><a href='http://scummvm.org/downloads/'>Multiple Platforms</a> to work with multiple <a href='http://scummvm.org/games/'>Free Games</a></p>
        <p>King's Quest <a href='http://www.agdinteractive.com/games/games.html'>Remakes</a></p>
        <p><a href='http://www.raceintospace.org/'>Race Into Space</a></p>
        <p><a href='http://forum.caravelgames.com/downloads.php'>Deadly Rooms Of Death Architect Edition</a></p>
        <p>Free Blizzard Games including StarCraft Legacy for: <a href='https://us.battle.net/account/download/?show=classic'>Windows & Mac</a></p>
        <p><a href='http://www.enemynations.com/'>Enemy Nations</a>: The hard way is following these <a href='http://yoni0505.blogspot.com/2013/03/how-to-install-and-run-enemy-nations-on.html'>Instructions</a></p>
        <p>It is easier to just use a virtual machine of your choice such as VMware Player or Virtual Box and use <a href='http://www.trustfm.net/software/utilities/Folder2Iso.php'>Folder2Iso</a> tool.</p>
        <p>This game dosn't work on modern windows only non 64-bit Windows operating systms and any Linux that runs with wine: <a href='https://archive.org/details/win3_dranstrm'>Drain Storm</a></p>
        <p><a href='http://www.daggert.net/Folio/Programming/Presage/LodeRunner/Loderunner1.htm'>Lode Runner Win 95</a></p>
        <p><a href='http://www.factor5.de/downloads.shtml'>Three Amiga Games</a> that works best with <a href='https://fs-uae.net/'>FS-UAE</a> also each time before starting change the option otherwise the default setting would be slow.</p>
        <p> *Fs-UAE controls include holding the left alt key in order to move the mouse off the screen, arrow keys, and the right control key for the action button.</p>
        <p><a href='https://te4.org/'>Tales of Maj'Eyal</a> is on all three <a href='https://te4.org/download'>Platforms (Win+Mac+Linux)</a></p>
        <p><a href='https://osgameclones.com/'>Free Inspired Game Projects</a></p>
        <h1>Games that were Commerical Became Offical Freeware</h1>
        <p><a href='https://archive.org/details/cart-life-v1.6'>CartLife</a> and the source code at: <a href='https://github.com/gondur/cartlife_src'>GitHub</a></p>
        <p><a href='https://github.com/akarnokd/open-ig'>Open Imperium Galactica</a>: is a Jave remake with permission from the company.</p>
        <p><a href='http://www.amuletsandarmor.com/'>Amulets & Armor</a></p>        
        <p>Because of the early Command & Conquer games were released for free a project was made with an easier interface: <a href='http://www.openra.net/'>Open Red Alert</a></p>
        <p>Additonal Links for offial released <a href='https://cncnz.com/features/freeware-classic-command-conquer-games/'>Freeware Classics</a> and <a href='https://cncnet.org/'>Mods</a></p>
        <p><a href='https://www.tribesuniverse.com/'>Tribes Series</a></p>
        <p><a href='http://en.uesp.net/wiki/Arena:Files'>Elder Scrolls: Arena</a></p>
        <p><a href='http://en.uesp.net/wiki/Daggerfall:Files'>Elder Scrolls II: Daggerfall</a></p>
        <p>7 Kingdomes Ancient Adversaries is a realtime strategy mixed with civilzation mechanics including researching: <a href='https://github.com/the3dfxdude/7kaa/releases'>GitHub</a> <a href='https://7kfans.com/'>Offical Website</a>, or <a href='https://sourceforge.net/projects/skfans/'>SourceForge</a></p>
        <h1>Open Source Freeware:</h1>
        <p>Liero is a 2D real time version of Worms <a href='http://www.liero.be/'>Liero Offical Website</a> or <a href='https://github.com/gliptic/liero'>GitHub</a></p>
        <p>A good fork to Liero with Linux/Mac/Windows ports is:<a href='http://www.openlierox.net/downloads/'>Open Liero X</a> or at <a href='https://github.com/albertz/openlierox'>GitHub</a></p>
        <p>A puzzle that involves matching and not getting trap <a href='http://www.biniax.com/'>Biniax 2</a></p>
        <p>Free Orion <a href='http://www.freeorion.org/index.php/Main_Page'>Home</a> or <a href='https://github.com/freeorion/freeorion'>GitHub</a></p>
        <p><a href='https://github.com/teeworlds/teeworlds'>Tee Worlds</a> <a href='https://www.teeworlds.com/'>Offical Website</a></p>
        <p> <a href='https://www.openttd.org/en/'>Open Transport Tycoon Deluxe</a></p>
        <p><a href='https://github.com/doublespeakgames/adarkroom'>A Dark Room Github</a></p>
        <h1>Soruces:</h1>
        <p><a href='https://en.wikipedia.org/wiki/List_of_freeware_video_games'>List of Freeware Video Games (Wikipedia List)</a></p>
        <p><a href='https://en.wikipedia.org/wiki/List_of_free_and_open-source_software_packages'>List of Free and Open-Source Software Packages</a></p>
        <p><a href='https://en.wikipedia.org/wiki/List_of_commercial_video_games_released_as_freeware'>List Of COmmercial Video Games Released As Freeware</a></p>
        <GameEngines />
      </div>
    );
  }
}
export default FrewareGames