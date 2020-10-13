import { Component } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { Zip } from '@ionic-native/zip/ngx';
import docx4js from "docx4js"
import ModelHandler from "docx4js";
import mammoth from "mammoth/mammoth.browser";
import ODTDocument from "./ODTDocument.js";


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private zip: Zip) { }

  ionViewWillEnter() {

    console.log("hello")
    console.log(ODTDocument);

    var req = new XMLHttpRequest();
    req.open('GET', '/assets/test.odt');
    req.responseType = 'arraybuffer';
    req.addEventListener('load', function() {
      var empty = req.response;
      
      var odtdoc = new ODTDocument(empty);
      try {
        var html = odtdoc.getHTMLUnsafe();
        console.log(html);
      } catch(e) {
        throw e;
      }
      var odt = odtdoc.getODT();
    });
    req.send();
}
}
