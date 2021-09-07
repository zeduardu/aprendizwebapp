import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LoadingService } from '@shared/loading.service';
import { StandartMessages } from '@shared/util/responsemessage.model';
import { RecaptchaErrorParameters } from 'ng-recaptcha';
import { Contact } from 'src/app/data/models/contact.model';
import { ContactService } from 'src/app/data/service/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  form!: FormGroup;
  autoResize = true;
  loading$ = this.loader.loading$;
  checked = false;
  display = false;
  message = '';

  constructor(
    private formBuilder: FormBuilder,
    private contactService: ContactService,
    public loader: LoadingService
  ) {}

  ngOnInit(): void {
    this.configForm();
  }

  configForm(): void {
    this.form = this.formBuilder.group({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.email, Validators.required]),
      message: new FormControl('', Validators.required),
    });
    this.checked = false;
  }

  onSubmit(): void {
    if (!this.checked || !this.form.valid) {
      this.display = true;
      this.message = StandartMessages.formError;
      return;
    }

    const message: Contact = this.form.value;
    this.contactService.sendMessage(message);
  }

  public resolved(captchaResponse: string): void {
    console.log(`Resolved captcha with response: ${captchaResponse}`);
    this.checked = true;
  }

  public onError(errorDetails: RecaptchaErrorParameters): void {
    console.log('reCAPTCHA error encountered; details:', errorDetails);
  }
}
