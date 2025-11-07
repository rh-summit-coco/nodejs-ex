# 🏥 Janine's Hospital Demo - Red Hat Summit

A secure healthcare platform demonstrating Red Hat's enterprise development stack with security-first approach.

## 🔐 Security Features

- **Cryptographically signed container images** - All images signed with Cosign
- **SBOM Generation** - Software Bill of Materials for transparency
- **SLSA Provenance** - Supply chain attestation
- **Vulnerability Scanning** - Automated security scanning
- **Source Code Analysis** - Static security analysis
- **Zero-Trust Pipeline** - Secure CI/CD workflows
- **HIPAA Compliance** - Healthcare-grade security

## 🛠️ Technology Stack

- **Azure Red Hat OpenShift (ARO)** - Container platform
- **Red Hat Developer Hub** - Developer portal (Backstage)
- **OpenShift Pipelines** - CI/CD with Tekton
- **OpenShift GitOps** - Deployment with ArgoCD
- **OpenShift Dev Spaces** - Cloud-native IDE
- **Red Hat UBI** - Secure base images

## 🏥 Hospital Platform Features

- **Patient Management System** - Comprehensive patient records
- **Electronic Health Records (EHR)** - Digital health records
- **Real-time Analytics** - Healthcare data insights
- **Secure Data Encryption** - End-to-end encryption
- **Compliance Monitoring** - Automated HIPAA compliance
- **Mobile-First Design** - Responsive healthcare UI

## 🚀 Quick Start

```bash
npm install
npm start
```

## 📋 API Endpoints

- `GET /` - Hospital demo homepage
- `GET /health` - Health check endpoint
- `GET /api/patients` - Patient API (demo)

## 🔗 Links

- **Application**: https://nodejs-ex-janine-dev.apps.uhfgfgde.eastus.aroapp.io/
- **Repository**: https://github.com/rh-summit-coco/nodejs-ex
- **Pipeline**: Tekton secure-ci-pipeline
- **GitOps**: ArgoCD janine-secure-app

## 📊 Status

- **Security**: ✅ All checks passed
- **Deployment**: ✅ Healthy
- **Compliance**: ✅ HIPAA ready
- **Performance**: ✅ Optimized

---

**Built with ❤️ for Red Hat Summit Healthcare Demo**