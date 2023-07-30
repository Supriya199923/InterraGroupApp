import React, { useState, useEffect } from 'react';
import "./HomePage.css";

const accessToken = 'eyJ0eXAiOiJKV1QiLCJub25jZSI6IjBZZUNWZFhEczlfYW9RcGRRcWNEbklKLW81Xy1mbFpRVnRUUkM1b1kxZlEiLCJhbGciOiJSUzI1NiIsIng1dCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyIsImtpZCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyJ9.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTAwMDAtYzAwMC0wMDAwMDAwMDAwMDAiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC85N2IzMmU1Yy03ZDViLTRkOGYtODIyNS1jNGUzNWY0MGVjM2IvIiwiaWF0IjoxNjkwNzA0NTEyLCJuYmYiOjE2OTA3MDQ1MTIsImV4cCI6MTY5MDcwODQxNSwiYWNjdCI6MCwiYWNyIjoiMSIsImFpbyI6IkFZUUFlLzhVQUFBQWZMMkptWEJEUEN6YzdId1A4Qzl2aEx1YWs5ak1Xcy95R2syR2MzNVdyZS9jdFlicDR1b2UzL1JzUkJVZXlNRW9jVkNSRlNWOG9nN0hhck1ESEZ4MzhnOHdXdENNRDJDSm1wOXpldjl4dHA4OG9TVHdvd2VVczlGdy9ydjZoSXVTWnRsQU4zUDh2dUxQQ3duZ1hWc2RkTWp3ZENJa3Fmanc5YitDZWc5VWppaz0iLCJhbXIiOlsicnNhIiwibWZhIl0sImFwcF9kaXNwbGF5bmFtZSI6IkdyYXBoIEV4cGxvcmVyIiwiYXBwaWQiOiJkZThiYzhiNS1kOWY5LTQ4YjEtYThhZC1iNzQ4ZGE3MjUwNjQiLCJhcHBpZGFjciI6IjAiLCJkZXZpY2VpZCI6IjkwM2RhNWFmLTA2ZTktNDNhZS1hMDA4LWM5Y2Y1YjViYjVmYyIsImZhbWlseV9uYW1lIjoiRGFzIiwiZ2l2ZW5fbmFtZSI6IlN1cHJpeWEiLCJpZHR5cCI6InVzZXIiLCJpcGFkZHIiOiI0My4yNTEuMTczLjQ0IiwibmFtZSI6IlN1cHJpeWEgRGFzIiwib2lkIjoiZjdhYTdjOWQtMzFjNC00MDQ5LWFiYzEtNmY4Y2NhOWM4MTQwIiwicGxhdGYiOiIzIiwicHVpZCI6IjEwMDMyMDAyNzg2RTk2OEYiLCJyaCI6IjAuQVhFQVhDNnpsMXQ5ajAyQ0pjVGpYMERzT3dNQUFBQUFBQUFBd0FBQUFBQUFBQUJ4QU9zLiIsInNjcCI6IkRldmljZU1hbmFnZW1lbnRDb25maWd1cmF0aW9uLlJlYWQuQWxsIERldmljZU1hbmFnZW1lbnRDb25maWd1cmF0aW9uLlJlYWRXcml0ZS5BbGwgRGV2aWNlTWFuYWdlbWVudE1hbmFnZWREZXZpY2VzLlJlYWQuQWxsIERldmljZU1hbmFnZW1lbnRNYW5hZ2VkRGV2aWNlcy5SZWFkV3JpdGUuQWxsIERpcmVjdG9yeS5SZWFkLkFsbCBEaXJlY3RvcnkuUmVhZFdyaXRlLkFsbCBHcm91cC5SZWFkLkFsbCBHcm91cC5SZWFkV3JpdGUuQWxsIEdyb3VwTWVtYmVyLlJlYWQuQWxsIG9wZW5pZCBwcm9maWxlIFVzZXIuUmVhZCBlbWFpbCIsInNpZ25pbl9zdGF0ZSI6WyJkdmNfbW5nZCIsImR2Y19jbXAiLCJrbXNpIl0sInN1YiI6Ikg1XzR3cWdLd3AwM2dnVERyVVRPbk1hZDlmUGZzc1U0RUhsTEl6bHhRb2ciLCJ0ZW5hbnRfcmVnaW9uX3Njb3BlIjoiQVMiLCJ0aWQiOiI5N2IzMmU1Yy03ZDViLTRkOGYtODIyNS1jNGUzNWY0MGVjM2IiLCJ1bmlxdWVfbmFtZSI6IlN1cHJpeWFEQGludGVycmFpdC5jb20iLCJ1cG4iOiJTdXByaXlhREBpbnRlcnJhaXQuY29tIiwidXRpIjoic2Q0djJDM0pURUcyZzR4dzZxZzhBQSIsInZlciI6IjEuMCIsIndpZHMiOlsiZjJlZjk5MmMtM2FmYi00NmI5LWI3Y2YtYTEyNmVlNzRjNDUxIiwiYjc5ZmJmNGQtM2VmOS00Njg5LTgxNDMtNzZiMTk0ZTg1NTA5Il0sInhtc19jYyI6WyJDUDEiXSwieG1zX3NzbSI6IjEiLCJ4bXNfc3QiOnsic3ViIjoiOGJNNFItVFIwYy1xSllVQnFNTUNVdVF3TjE0WmNiUFBUdTdFZU5ENkhCOCJ9LCJ4bXNfdGNkdCI6MTYxMTkyODkzOX0.cJrNbZnjcIkbl38rdJvrFrBCZtK7TqYJGQ-m_-wVwBMajr35AURD8U6Hzx7nBMtV6OKT6g_fLaAnCZgD8TPG0BZx-v0GS4qchOcmuBeujvxjLP_HTXkoLkd1WkXP8yaUWXyKjDyj-MzpL7T-WuxdedNi8cvAXQgd2U0FHJK_d-rK2-wYj41HxMFBMx9klKcnRELXQTNd-nA3K7wuE-qGIWDw52yUhVfkka0Q0XE6WEl0nMTxPC-iKnbH2ZZv239mqIkdmQ2iNRaEcACaP30vK0l1t4wioXkpMEEtwvzguh4agKPTZ7aeCtEGgpvDiOX37D0nHu6q-bcC_l8ygCDs9A'; // Your access token here

function HomePage() {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    fetch("https://graph.microsoft.com/v1.0/deviceManagement/managedDevices?$filter=(operatingSystem eq 'Windows' or operatingSystem eq 'macOS')&$select=deviceName,userPrincipalName,lastSyncDateTime,complianceState,userDisplayName", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((response) => response.json())
      .then((data) => setDatas(data.value))
      .catch((error) => console.error('Error fetching API:', error));
  }, []);

  return (
    <div>
      {datas.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>User Name</th>
              <th>Device Name</th>
              <th>user Email</th>
              <th>Last Sync Date Time</th>
              <th>Compliance Status</th>
              {/* Add more column headers as needed */}
            </tr>
          </thead>
          <tbody>
            {datas.map((item, index) => (
              <tr key={index}>
                <td>{item.userDisplayName}</td>
                <td>{item.deviceName}</td>
                <td>{item.userPrincipalName}</td>
                <td>{item.lastSyncDateTime}</td>
                <td>{item.complianceState}</td>
                {/* Add more table cells for other properties */}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default HomePage;
