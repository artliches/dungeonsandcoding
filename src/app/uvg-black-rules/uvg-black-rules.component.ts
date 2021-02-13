import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-uvg-black-rules',
  templateUrl: './uvg-black-rules.component.html',
  styleUrls: ['./uvg-black-rules.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class UvgBlackRulesComponent {

  homebrewRules = {
    'EVERYONE IS UNIQUE/NO ONE IS UNIQUE':
    `

    <div>On character creation, all players take turns generating
    stats one at a time until all the stats have been created. Stats are generated in order (<b>SEACAT</b>),
    then the players can vote on which zero to three stats they'd like to roll at <b>advantage</b>.</div>

    <div>For every stat they roll at advantage, they must roll an other stat at <b>disadvantage</b>. Fair\'s fair after all.</div>

    <div>Afterwards, each player can individually swap two scores around.`,

    'A HEALTHY START':
    `

    All characters start with 10 Life. Life growth afterwards is decided based on your class choice.`,

    'YOU GOTTA EARN THE WEIRD' :
    `
    <div>All characters start as <span class='black-back'><b class='rainbow'>RAINBOWLANDERS</b></span>, at least until the players
    discover ways of becoming different species.</div>

    <div>This helps drive home the idea that your characters are new to the UVG and further rewards players for
    exploring the UVG.</div>

    <div>(This is inspired by Dead Halt!)</div>`,

    'CREATING THE CANON':
    `
    <div>Exploring the UVG is about discovering things. To keep with that spirit, whenever a player/character
    comes across something new or declares something new about the world (such as seeing a new animal or landmark, or
    talking about their god), every player must create one rumor about the subject.</div>

    <div>Once everyone has stated one rumor about the subject, the players can then soft veto any one rumor, allowing the player
    who was veto'd to create a new rumor. The guide can also veto any or all of the rumors.</div>

    <div>Players can veto once per session, the guide can veto any number of times (<b>within reason, don't be a jerk</b>).</div>

    <div>Once all the rumors are agreed upon, the guide will create a rumor card of that subject and add it to the rumor deck.
    <b>Players should make sure to pester the guide about this if they fail to do so.</b></div>`,

    'BLOOD MAGIC':
    `
    <div>Casting magic of any kind requires the caster to pay a price in Life.</div>
    <div>The cost of a spell is equal to double the spell's level (<b>cost = spellLevel * 2</b>).</div>
    <div>Casting class (such as wizards and clerics) make spell cheaper by making them equal the spell level (<b>cost = spellLevel</b>).
    They can also memorize spells, removing them from their inventory and reducing the cost to 0, at the price of
    1 permanent Life.

    <div>A caster can only memorize a number of spells equal to their <b>HD</b>, and of spell levels equal to their
    <b>HD</b>, so a caster with 2 <b>HD</b> can memorize two spells, of levels 1 or 2.</div>`
  };

  constructor() { }

}
