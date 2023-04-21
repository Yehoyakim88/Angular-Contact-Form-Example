import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {
  @ViewChild('myForm') myForm! : ElementRef;
  @ViewChild('nameField') nameField! : ElementRef;
  @ViewChild('messageField') messageField! : ElementRef;
  @ViewChild('sendButton') sendButton! : ElementRef;

  constructor() {}

  async sendMail() {
    // action="Link to/send_mail.php"
    console.log('Sending mail', this.myForm);
    let nameField = this.nameField.nativeElement;       // is equivalent to document.getElementById
    let messageField = this.messageField.nativeElement;
    let sendButton = this.sendButton.nativeElement;

    nameField.disabled = true;
    messageField.disabled = true;
    sendButton.dsiabled = true;
    // show Animation while sending
    let fd = new FormData();
    fd.append('name', nameField.value);
    fd.append('message', messageField.value);

    // senden
    await fetch('http://www.angularsendmail.alijotnt.de/send_mail.php',
    {
      method: 'POST',
      body: fd,
      mode: 'no-cors'  // no cross origin resource sharing
    }
    );

    // show text that message has been sent
    nameField.disabled = false;
    messageField.disabled = false;
    sendButton.dsiabled = false;


  }

}
