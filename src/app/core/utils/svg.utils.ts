import { MdIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

export const loadSvgResources = ( ir: MdIconRegistry, ds: DomSanitizer ) => {
    ir.addSvgIcon('project', ds.bypassSecurityTrustResourceUrl('assets/project.svg'));
};
