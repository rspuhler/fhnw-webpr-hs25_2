# Fork Sync Guide

## 1. Setup (Einmalig)
```bash
git remote add upstream [https://github.com/WebEngineering-FHNW/webpr-hs25_2](https://github.com/WebEngineering-FHNW/webpr-hs25_2)
```

## 2. Update (Regelmäßig)
```bash
git fetch upstream
git checkout main
git merge upstream/main
git push origin main
```