import { Directive, HostBinding, HostListener } from "@angular/core";

@Directive({
    selector:'[appDropdown]'
})
export class DropdownDirective
{
    /* open is the class name of Bootstrap  */
    @HostBinding('class.open') isOpen = false;

    @HostListener('click') toggleOpen()
    {
        this.isOpen = !this.isOpen;
    }
    

}
