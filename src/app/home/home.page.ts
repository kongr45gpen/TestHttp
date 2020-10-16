import { Component } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { Zip } from '@ionic-native/zip/ngx';
import docx4js from "docx4js"
import ModelHandler from "docx4js";
import mammoth from "mammoth/mammoth.browser";
import ODTDocument from "./ODTDocument.js";

import * as fs from 'fs';
import WordExtractor from "word-extractor";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private zip: Zip) {}

  ionViewWillEnter() {

    console.log("hello")
    console.log(WordExtractor);

    fs.readFile('/test.txt', function(err, contents) {
      console.log(contents.toString());
    });

}
}
