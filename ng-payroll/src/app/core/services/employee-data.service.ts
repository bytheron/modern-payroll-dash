import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { MOCK_TASKS, MOCK_USER_PROFILE } from '../data/mock-data.api';
import { ITask, IUserProfile } from '../schemas/interfaces/employee.interface';

@Injectable({
  providedIn: 'root',
})
export class EmployeeDataService {
  // We simulate an API call with using delays

  public getUserProfile(): Observable<IUserProfile> {
    return of(MOCK_USER_PROFILE).pipe(delay(250));
  }

  public getTasks(): Observable<ITask[]> {
    return of(MOCK_TASKS).pipe(delay(500));
  }
}

// NOTE: I could have inserted the MOCK_DATA directly in the service,
// but I wanted to keep the service clean and focused on data retrieval logic only.
// This also allows for easier testing and potential future changes to data sources
// without affecting the service's core functionality.
