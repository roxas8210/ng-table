import { MdIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

export const loadSvgResources = ( ir: MdIconRegistry, ds: DomSanitizer ) => {
    ir.addSvgIcon('project', ds.bypassSecurityTrustResourceUrl('assets/project.svg'));
    ir.addSvgIcon('year', ds.bypassSecurityTrustResourceUrl('assets/year.svg'));
    ir.addSvgIcon('month', ds.bypassSecurityTrustResourceUrl('assets/month.svg'));
};
