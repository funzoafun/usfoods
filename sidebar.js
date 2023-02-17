<Container
  sx={{
    minHeight: "79vh",
    maxHeight: "auto",
    maxWidth: "auto",
    backgroundColor: "primary.white",
    borderRight: "1px solid black",
  }}
>
  <Grid spacing={5}>
    <div
      style={{
        marginTop: "0.5ch",
        backgroundColor: "grey",
        borderRadius: "10px",
      }}
      className="row-6 border-bottom"
    >
      <Stack
        sx={{
          // display: "flex",
          justifyContent: "center",
        }}
        direction="row"
      >
        <Button>
          <HomeRoundedIcon
            sx={{
              color: "black",
              fontSize: 35,
              marginLeft: "1.5ch",
              paddingRight: "1px",
            }}
          />
        </Button>
        <Button>
          <SaveRoundedIcon sx={{ color: "black", fontSize: 35 }} />
        </Button>
        <Button>
          <LocalPrintshopRoundedIcon sx={{ color: "black", fontSize: 35 }} />
        </Button>
        <Button>
          <ChatBubbleOutlinedIcon
            sx={{ color: "black", fontSize: 35, marginRight: "1.5ch" }}
          />
        </Button>
      </Stack>
    </div>

    <div className="row">
      <Divider orientation="horizontal">
        <h5>{sidebarLabel}</h5>
      </Divider>
    </div>
    <Box
      sx={{
        flexDirection: "column",
        height: "auto",
        maxHeight: "60vh",
        overflow: "hidden",
        overflowY: "scroll",
      }}
    >
      <div className="row justify-content-center">
        <Stack spacing={3}>
          {Information.Image1.map((info) => (
            <Stack direction="row" spacing={2}>
              {info.value ? (
                <Box
                  sx={{
                    borderLeftStyle: "solid",
                    borderColor: "#1565c0",
                    padding: "1ch",
                  }}
                >
                  <FcOk fontSize={30} />
                </Box>
              ) : (
                <Box
                  sx={{
                    borderLeftStyle: "solid",
                    borderColor: "#1565c0",
                    padding: "1ch",
                  }}
                >
                  <FcCancel fontSize={30} />
                </Box>
              )}
              <Box
                width="80%"
                sx={{
                  border: "1px solid #ccc",
                  justifyContent: "center",
                  display: "flex",
                  textAlign: "center",
                  alignItems: "center",
                  borderRadius: "16px",
                }}
              >
                {info.extended ? (
                  <div sx={{ maxWidth: 345 }}>
                    <Stack direction="row" spacing={2}>
                      <>{info.name}</>
                      <ExpandMore
                        expand={expanded}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                      >
                        <ExpandMoreIcon />
                      </ExpandMore>
                    </Stack>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                      {info.extended.map((extendedInfo) => (
                        <Stack direction="row" spacing={2}>
                          {extendedInfo.value ? (
                            <Box
                              sx={{
                                borderLeftStyle: "solid",
                                borderColor: "#1565c0",
                                padding: "1px",
                              }}
                            >
                              <FcOk fontSize={20} />
                            </Box>
                          ) : (
                            <Box
                              sx={{
                                borderLeftStyle: "solid",
                                borderColor: "#1565c0",
                                padding: "1px",
                              }}
                            >
                              <FcCancel fontSize={20} />
                            </Box>
                          )}
                          <Box
                            width="80%"
                            sx={{
                              border: "1px solid #ccc",
                              justifyContent: "center",
                              display: "flex",
                              textAlign: "center",
                              alignItems: "center",
                              borderRadius: "16px",
                            }}
                          >
                            <p>{extendedInfo.name}</p>
                          </Box>
                        </Stack>
                      ))}
                    </Collapse>
                  </div>
                ) : (
                  <p>{info.name}</p>
                )}
              </Box>
            </Stack>
          ))}
        </Stack>
      </div>
    </Box>
  </Grid>
</Container>;
