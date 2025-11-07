const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head><title>Janine's Hospital Demo - Secured by Raj -  Red Hat Summit</title></head>
      <body style="font-family: Arial; padding: 40px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);">
        <div style="background: white; padding: 30px; border-radius: 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
          <h1 style="color: #333; margin-bottom: 20px;">🏥 Janine's Hospital Demo</h1>
          <h2 style="color: #666;">Red Hat Summit Demo - Secure Healthcare Platform</h2>
          <div style="background: #f8f9fa; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <h3>🔐 Security Features Implemented:</h3>
            <ul>
              <li>✅ Cryptographically signed container image</li>
              <li>✅ SBOM (Software Bill of Materials) generated</li>
              <li>✅ SLSA provenance attestation</li>
              <li>✅ Vulnerability scanning passed</li>
              <li>✅ Source code security analysis</li>
              <li>✅ Zero-trust deployment pipeline</li>
              <li>✅ HIPAA-compliant container security</li>
            </ul>
          </div>
          <div style="background: #e3f2fd; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <h3>🛠️ Built with Red Hat Technologies:</h3>
            <ul>
              <li>🔴 Azure Red Hat OpenShift (ARO)</li>
              <li>🔴 Red Hat Developer Hub (Backstage)</li>
              <li>🔴 OpenShift Pipelines (Tekton)</li>
              <li>🔴 OpenShift GitOps (ArgoCD)</li>
              <li>🔴 Red Hat Universal Base Image (UBI)</li>
              <li>🔴 OpenShift Dev Spaces</li>
            </ul>
          </div>
          <div style="background: #e8f5e8; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <h3>🏥 Hospital Platform Features:</h3>
            <ul>
              <li>📋 Patient Management System</li>
              <li>🩺 Electronic Health Records (EHR)</li>
              <li>📊 Real-time Analytics Dashboard</li>
              <li>🔐 Secure Data Encryption</li>
              <li>🚨 Automated Compliance Monitoring</li>
              <li>📱 Mobile-First Design</li>
            </ul>
          </div>
          <p style="color: #666; margin-top: 30px;">
            <strong>Repository:</strong> rh-summit-coco/nodejs-ex<br>
            <strong>Deployment:</strong> ${new Date().toISOString()}<br>
            <strong>Environment:</strong> janine-dev namespace<br>
            <strong>Status:</strong> 🟢 Healthy & Secure
          </p>
        </div>
      </body>
    </html>
  `);
});

app.get('/health', (req, res) => {
  res.json({
    status: 'healthy',
    service: 'janine-hospital-demo',
    timestamp: new Date().toISOString(),
    version: '1.0.0'
  });
});

app.get('/api/patients', (req, res) => {
  res.json({
    message: 'Patient API endpoint',
    total_patients: 1247,
    active_cases: 89,
    status: 'operational'
  });
});

app.listen(port, '0.0.0.0', () => {
  console.log(`🏥 Janine's Hospital Demo listening on port ${port}`);
  console.log(`🔐 Secure healthcare platform initialized`);
});