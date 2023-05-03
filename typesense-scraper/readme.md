# Following this guide

https://typesense.org/docs/guide/docsearch.html#run-the-scraper

```bash
docker run -it --env-file=.env -e "CONFIG=$(cat config.json | jq -r tostring)" typesense/docsearch-scraper
```
