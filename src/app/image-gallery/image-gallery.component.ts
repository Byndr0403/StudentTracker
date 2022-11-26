import { Component } from '@angular/core';

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.scss']
})
export class ImageGalleryComponent {
 
  public items: any[] = [
    { title: '', url: 'https://media.istockphoto.com/id/594020108/photo/university-of-florida.jpg?s=612x612&w=0&k=20&c=NnepSVaLV6-NXZG5O6VAB1g71d-4YywPEMeXPNy48-g=' },
    { title: '', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdg_JwW1Zqo5kl-n_PJDvjOwxgNIZHXEON1w&usqp=CAU' },
    { title: '', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_p3OMfg2sXFVZV2MAKe0JH4-Vr-NQNZ6UEA&usqp=CAU' }
  ];

  public width = '100%';
  public height = '510px';
}
