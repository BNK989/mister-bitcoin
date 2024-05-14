import { ComponentFixture, TestBed } from '@angular/core/testing'

import { Homepage } from './homepage.component'

describe('Homepage', () => {
    let component: Homepage
    let fixture: ComponentFixture<Homepage>

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [Homepage],
        }).compileComponents()

        fixture = TestBed.createComponent(Homepage)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it('should create', () => {
        expect(component).toBeTruthy()
    })
})
