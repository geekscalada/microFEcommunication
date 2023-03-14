import { AfterViewChecked, ChangeDetectorRef, Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { BleClient, BleDevice, BluetoothLe, ScanResult } from '@capacitor-community/bluetooth-le';
import { Router } from '@angular/router';
import { loadRemoteModule, loadRemoteEntry, LoadRemoteModuleOptions } from '@angular-architects/module-federation';
import { WebComponentWrapper } from '@angular-architects/module-federation-tools';
import { WebComponentWrapperOptions } from '@angular-architects/module-federation-tools/lib/web-components/web-component-wrapper';
import { ReactWrapperComponent } from './components/react-wrapper/react-wrapper.component';


import {CommonlibrxjsService} from 'commonlibrxjs';
import { CommonlibrxjsService2 } from 'commonlibrxjsv2';


import {CommonsLibService} from 'sharedLib';

import {CommonsLibService3} from 'commonlib3'



@Component({
  selector: 'app-bichos',
  templateUrl: './bichos.page.html',
  styleUrls: ['./bichos.page.scss'],
})
export class BichosPage implements OnInit, AfterViewChecked {
  myBichos: any[] = [];
  @ViewChild(IonModal) modal: IonModal;
  message: string;
  device: any;
  ble: boolean;
  scanText: string;
  devices: any[] = [];
  scanning: boolean;

  optionsReact: WebComponentWrapperOptions = {
    type: 'script',
    remoteEntry: 'http://localhost:8102/remoteEntry.js',
    remoteName: 'react',
    exposedModule: './reactMF',
    elementName: 'react-element',
  };

  optionsMotus: LoadRemoteModuleOptions = {
    type: 'module',
    remoteEntry: 'http://localhost:8101/remoteEntry.js',
    exposedModule: './motusComponent',

  }

  public contador: number = 0;  

  public instanceCommonsLibService: CommonsLibService3;

  constructor(
    
    private change: ChangeDetectorRef, private router: Router,
    private _commonlibrxjsService: CommonlibrxjsService,
    private _commonlibrxjsService2: CommonsLibService
    
    
    ) {

      
      
  }
  //End constructor

  sendMessageContador(): void {
    //this._commonlibrxjsService.sendMessage("Adding 1 to the counter");
    this.instanceCommonsLibService.sendMessage("Adding 1 to the counter");
    console.log("Enviando mensaje desde Soda ")
  }
  
  sumContador(): void {
    this.contador = this.contador + 1;
    this.sendMessageContador();    
  }


  ngAfterViewChecked(): void {
  }

  @ViewChild('bicho1PlaceHolder', { read: ViewContainerRef })
  viewContainer!: ViewContainerRef;

  @ViewChild('bicho2PlaceHolder', { read: ViewContainerRef })
  viewContainer2!: ViewContainerRef;

  ngOnInit() {
    BleClient.initialize({ androidNeverForLocation: true }).then(() => {
      BleClient.isEnabled().then((res) => {
        if (res) {
          this.ble = true;
        } else {
          this.ble = false;
        }
      })
    })


    this.instanceCommonsLibService = CommonsLibService3.getInstance();

    this.instanceCommonsLibService.getMessage().subscribe((data) => {

      if (data && data == "Adding 1 to the counter") {
        this.contador = this.contador + 1;
      }

      console.log("mensaje en soda", data)


    });



  }

  toggleBle(event: any) {
    if (this.ble) {
      this.enableBluetooth();
    } else {
      this.disableBluetooth();
    }

  }

  async enableBluetooth() {
    await BleClient.enable()
    console.log('')
  }

  async disableBluetooth() {
    try {
      await BleClient.disable()
    } catch (err) {
      console.log(err)
    }
  }

  async startScanning() {
    this.scanning = true;
    this.scanText = "Scanning Bichos...";
    if (this.myBichos.filter(bicho => bicho.localName === 'Motus Pocho (Angular)').length == 0) {
      this.devices.push({ localName: 'Motus Pocho (Angular)', connection: false, platform: 'Angular' })
    }

    setTimeout(() => {
      if (this.myBichos.filter(bicho => bicho.localName === 'Otro bicho (React)').length == 0) {
        this.devices.push({ localName: 'Otro bicho (React)', connection: false, platform: 'React' })
      }

    }, 1000)

    try {
      await BleClient.requestLEScan({ allowDuplicates: false }, (res1: ScanResult) => {
        console.log(res1)
        if (res1.localName) {
          this.devices.push(res1)
          this.change.detectChanges()
        }
      })
      setTimeout(async () => {
        await this.stopScanning();
      }, 6000)
    } catch (err) {
      console.log(err)
    }
  }

  async stopScanning() {
    await BleClient.stopLEScan().then(() => {
      this.scanText = '';
      this.scanning = false;
    })
  }


  connect(device: any, index: number) {
    BleClient.connect(device.device.deviceId).then(() => {
      this.devices[index]["connection"] = true;
      this.change.detectChanges();
      alert('Bicho connected!');
    }, (err) => {
      alert(err);
    })
  }

  testConnect(device: any, index: number) {
    this.devices[index]["connection"] = true;
    this.myBichos.push(device)
  }

  disconnect(device: BleDevice, index: number) {
    this.devices[index]["connection"] = false;
    this.change.detectChanges();
  }

  addTestBicho() {
    this.myBichos.push({
      title: "Motus Pocho",
      status: "online"
    })
  }

  loadMf(platform: string) {
    platform == 'Angular' ? this.router.navigate(['', { outlets: { motus: ['motus'] } }]) : this.router.navigate(['/bichos/react'])

  }

  async loadMf2() {
    const m = await loadRemoteModule({
      type: 'module',
      remoteEntry: 'http://localhost:8101/remoteEntry.js',
      exposedModule: './motusComponent'
    });
    console.log(m)



    const ref = this.viewContainer.createComponent(m.HomePage);
    ref.changeDetectorRef.detectChanges()
    //const ref2 = this.viewContainer2.createComponent(ReactWrapperComponent)
    //ref2.changeDetectorRef.detectChanges()

  }

  cancel() {
    this.modal.dismiss(null, 'cancel');
    this.devices = []
  }

  confirm() {
    this.modal.dismiss(this.device, 'confirm');
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      this.message = `Hello, ${ev.detail.data}!`;
    }

  }
}
